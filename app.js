import Player from "./player1.js"   //This is to import from player.js file I created. Note that this import has to be here on top of teh module to be functional. Note also that the capital letter 'P" has to be caps to import the class properly.

import BallController from "./ballController.js" //This is to import from ballController.js file I created.
import {Player2} from "./player2.js"
import Player1 from "./player1.js"

// import Goal from "./goal.js"  //This is to import from goal.js file.
  
  // To create modal for show/hide instruction button:

  const showHide = document.querySelector('#showHide')
  const modalContainer = document.querySelector('.modalContainer')
  const closeBtn = document.querySelector('.closeBtn')
  

  showHide.addEventListener('click', function() {
    modalContainer.classList.add('show')
        
  })

  closeBtn.addEventListener('click', function() {
    modalContainer.classList.remove('show')
  })



// const startGame = document.querySelector('#startGame')
//   startGame.addEventListener('click', animate)



//To draw the player on the canvas, I used class. I preferred to write the class code on another js file export it there and import it here.
  const canvas = document.querySelector("#canvas")

  const ctx = canvas.getContext("2d")   //It is to be noted here that ctx is just a variable name and it can be any name. ctx stands for context.
  canvas.width = 400
  canvas.height = 400   // Then, I go back to css and style the canvas.


  // const startGame = () => {    
  //     const clickStartGame =  document.querySelector('#startGame').addEventListener('click', function () {
  //     gameLoop()
  //     })
  //     If (clickStartGame = true) {

  //     }

  //   }
  
  // startGame()

  const ballController = new BallController(canvas)
  const player1  = new Player1 (canvas.width / 2.2, canvas.height / 1.15, ballController) //Instantiating from the class-Player. Here, I am fixing the postion of player1 in relation to the canvas by dividing the canvas width and height by factors.
  const player2  = new Player2(canvas.width / 2.2, canvas.height / 1.15, ballController)  //Note that position of player1 and player2 on the play field (canvas) are the same.
  
  let players = [player1, player2]

  const gameLoop = () => {    
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ballController.draw(ctx)   //This is to draw our ball
    player1.draw(ctx)    //This is to draw the first player using the method of our class. He has a brown color.
    // player2.draw(ctx)  //this is to draw the second player. He has a blue color
    // goal.draw(ctx) 
    
  }

  setInterval(gameLoop, 1000/70)   // This fixes speed of the ball when kicked. Note:1000 millisecond is 1 second.

  class Goal {     //I was thinking hard and thought that instead of creating a moving goal with translation animation over an image, it would give more sense to draw the goal on the canvas and put it on the x-y coordinate system so that I can track the score.
    constructor (x, y, points) {
     
      this.x = x
      this.y = y
      this.velocity = 1
      this.width = 70     // This is for width of the goal.
      this.height = 50
      this.update = function() {   //This update function will serve to increase the speed when the game goes to next level.
        this.draw(ctx)      
      }
      this.points = 0
 
    }
    
  
    //Below is to draw the goal with an image.
    draw(ctx) {      
      const img = new Image()
      img.src = "goal.jpg"
      ctx.drawImage(img, this.x, this.y, this.width, this.height)
      
    }
    

    move() {
      this.x = this.x + this.velocity
      if ((this.x >= 400-this.width) ||  //Here, this is for the goal going to the right and reached boundary of the green canvas
      (this.x < 0 )) {        //Here, this is for the goal going to the left and reached boundary of the green canvas
        this.velocity = -this.velocity         //Here to invert the direction of the goal
        
      }  
                 
    }
       
  }

  let goal;
  function init(){       //init is shorthand writing of initialize
    goal = new Goal(canvas.width / 90, canvas.height / 23)
  }

  function animate() {
    requestAnimationFrame(animate)    //This makes animation effect on the method move.
    goal.move()
    goal.update()
    // if (balls.x >= goal.x && balls.x + balls.radius <= goal.x + goal.width) {
    //   this.points += 1
    // }

  }

  init()
  animate()


  

  class Score {
     constructor(x, y, points) {
      this.x = x
      this.y = y
      this.points = 0
    
      this.draw = function() {
        c.font = '30px Helvetica'
        c.fillStyle = '#000'
        c.fillText(points, this.x, this.y)
      }
    
      this.update = function() {
        if (balls.x >= goal.x && balls.x + balls.radius <= goal.x + goal.width) {
          this.points += 1
        }
        this.draw()
      }
     }

  }

  const score = new Score(x, y, points)

  //To create a clock that counts down from 5 seconds and stop each player from kicking the ball and turning the chance to the other player:

  // let timeElm = document.querySelector('#p1-score')
  // let timer = (t) => {
  //   if (t === 0) {
  //     return
  //   }
  //   timeElm.innerHTML = t
  //   return setTimeout(() => {
  //     timer(--t)
  //   }, 1000)        //Here, I give the setTimeout of 1000ms for reducing the time.
  // }
  // timer(5)



  // const startGame = document.querySelector('#startGame')
  // startGame.addEventListener('click', animate)

  // class Ball {
  //   constructor(moveUp, moveDown, score) {
  //     this.moveUp = moveUp
  //     this.moveDown = moveDown
  //     this.score = score
  //   }
  //   inGoal() {
  //     return this.score
  //   }


  // }





// }

// Adding Levels:


// window.addEventListener('load', init,);
// const levels = {
//   easy: 5,
//   medium: 3,
//   hard: 2,
// }

// //to cchange level
// const currentLevel = levels.easy;

// let time = currentLevel;
// let score = 0;
// let isPLaying;//initalzies game...true if game is on false if game is off



//To reset game:

/*function resetGame(){
  const resetBtn = document.getElementById('reset')
  resetBtn.onclick = function() {
      let time = currentLevel;
      let score = 0;
      let isPLaying;   //Show number of seconds
  }
}*/

// Countdown timer:

//Countdown Timer
// function countdown() {
//   //Make sure time is not run out
//   if(time > 0) {
//       //Decrease time
//       time--;
//   }else if(time === 0) {
//       //Game Over
//       isPLaying = false;
//   }
//   //Show time
//   timeDisplay.innerHTML = time;
// }

//How to check Game status and winner scenario:

// //Check game Status
// function checkStatus() {

//   if(!isPLaying && time === 0){
//       message.innerHTML = 'Game Over!!';
//       score = -1;
//   }
// }


