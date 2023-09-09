var snakeBody = [{x: 11, y:11, color:"green"}]
var board = document.querySelector("#board")
var inputDirection = {x:0 , y:0}


var r 


window.onkeydown = function(event){
    
    switch(true){
// haut
        case event.keyCode == 38 && inputDirection.y !== 1:
            inputDirection = {x:0, y:-1}
            r = "haut"
        break;
// droite
        case event.keyCode == 39 && inputDirection.x !== -1: 
        inputDirection = {x:1, y:0}
        r = "droite"
        break;
 // bas
        case event.keyCode == 40 && inputDirection.y !== -1: 
        inputDirection = {x:0, y:1}
        r = "bas"
        break;
//gauche
        case event.keyCode == 37 && inputDirection.x !== 1 : 
        inputDirection = {x:-1, y:0}
        r = "gauche"
        break;
    }
}
var random = Math.floor(Math.random()*(21-1))+1;



var fps = 1;
function animate() {
    
  board.innerHTML = ""

  
  for(let i = snakeBody.length - 2; i >= 0 ; i--){
  
   



console.log(snakeBody[0].y)

    if(snakeBody[0].x == snakeBody[i+1].x &&  snakeBody[0].y == snakeBody[i+1].y  && snakeBody[0].color == snakeBody[i+1].color){
        alert("perdu")
        document.location.reload()
    }
     
      snakeBody[i+1] = {...snakeBody[i]}

      
     
     
  }

  switch(true){
    case snakeBody[0].x < 2 && r == "gauche": snakeBody[0].x = 22
    break;
    case snakeBody[0].x > 20 && r == "droite": snakeBody[0].x = 0
    break;
    case snakeBody[0].y <  2 && r =="haut": snakeBody[0].y = 22 
    break;
    case snakeBody[0].y > 20 && r =="bas": snakeBody[0].y = 0
    break;
    
    
}

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y

  

  if(snakeBody[0].x == random && snakeBody[0].y == random){
     
      snakeBody.push({x:snakeBody[0].x, y:snakeBody[0].y, color:"yellow"})
      random = Math.floor(Math.random()*(21-1))+1;
      fps +=0.5

      
  }

  var food = document.createElement("div")
  food.style.backgroundColor = "yellow"
  food.style.gridRowStart = random
  food.style.gridColumnStart = random
  board.appendChild(food)


  snakeBody.forEach(element => {
    
      const snake = document.createElement("div")
      snake.style.gridRowStart = element.y
      snake.style.gridColumnStart = element.x
      snake.style.backgroundColor = "green"
      snake.style.border="1px solid black"
      snake.className = "snake"
      board.appendChild(snake)
  })
 
 // Controle de la vitesse de la fonction  requestAnimation
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / fps);


}


animate();







