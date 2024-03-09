import BallController from "./ballController.js" //This is to import from ballController.js file I created.
import Player2 from "./player2.js"  //This is to import from player2.js file I created. Note that this import has to be here on top of teh module to be functional. Note also that the capital letter 'P" has to be caps to import the class properly.
import Player1 from "./player1.js"   //Same as above.
import Goal from "./goal.js"          //Same as above.
  
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

//To draw the player on the canvas, I used class. I preferred to write the class code on another js file export it there and import it here.
  const canvas = document.querySelector("#canvas")

  const ctx = canvas.getContext("2d")   //It is to be noted here that ctx is just a variable name and it can be any name. ctx stands for context.
  canvas.width = 400
  canvas.height = 400   // Then, I go back to css and style the canvas.

  const ballController = new BallController(canvas)
  const player1  = new Player1 (canvas.width / 2.2, canvas.height / 1.15, ballController) //Instantiating from the class-Player. Here, I am fixing the postion of player1 in relation to the canvas by dividing the canvas width and height by factors.
  const player2  = new Player2(canvas.width / 2.2, canvas.height / 1.15, ballController)  //Note that position of player1 and player2 on the play field (canvas) are the same.

//Defining player properties:

let playerOne = {
    Name: 'player1',
    totalScore: 0
  };
let playerTwo = {
    Name: 'Player2',
    totalScore: 0
  };

//Grabbing player's score elements from HTML:

const p1Score = document.querySelector('#p1-score')
const p2Score = document.querySelector('#p2-score')
p1Score.style.color = 'brown'
p2Score.style.color = 'blue'
console.log(p1Score)

//Game Start function

function startGame() {          //It is to be noted here that the start button cannot be interchangeably used with the reset button because reset is applicable only when the scores are less than or equal to 5 while the start game button is applicable when the game starts i.e all scores are 0 or when teh game is over i.e when one of the players' score is 10.
        
  document.querySelector('#startGame').addEventListener('click', function () {
    if(playerOne.totalScore <= 0 && playerTwo.totalScore <= 0) {
      alert('Welcome to Kick at Moving Goal Game. Enjoy!')
    } if(playerOne.totalScore >=10 || playerTwo.totalScore >= 10) {
      alert('Welcome to Kick at Moving Goal Game. Enjoy!')
      playerOne.totalScore = 0
      p1Score.innerHTML = 0
      playerTwo.totalScore = 0
      p2Score.innerHTML = 0
    }
  })  
    
}
  
startGame()

//To RESET the game:

function resetGame() {

  document.querySelector('#reset').addEventListener('click', function () {
    
    if(playerOne.totalScore <= 5 && playerTwo.totalScore <= 5) {
      alert('Game is reset to start from beginning.')
      
      playerOne.totalScore = 0
      p1Score.innerHTML = 0
      playerTwo.totalScore = 0
      p2Score.innerHTML = 0
    }
    return false
  })  
}
resetGame()

  //To MOVE THE GOAL sideways:

  let goal;
  function init(){       //init is shorthand writing of initialize
    goal = new Goal(canvas.width / 90, canvas.height/900, 1.6)
  }

  function animate() {
    requestAnimationFrame(animate)    //This makes animation effect on the method move invoked below.
    goal.move()      
  }

  init()
  animate()

//NEXT LEVEL - Enable selection by players to go to next level (with increased speed of goal) once a game is over:

function nextLevel () {
  document.querySelector('#next').addEventListener('click', function () {
    if(playerOne.totalScore >=10 || playerTwo.totalScore >= 10) {
      alert('You choose the second and last level of the game.')
      goal.speed(3) 
      playerOne.totalScore = 0          //Here, I thought to put the startGame(). However, once the game started, the next level should not be taken as starting a new game. But, I make the scores to start from zero for the next level as the winning score of the game is 10.
      p1Score.innerHTML = 0
      playerTwo.totalScore = 0
      p2Score.innerHTML = 0
    }
    return false
  })
}
nextLevel()


//THE GAMELOOP - The ENGINE for the game: Draws the ball, the players, and the goal on canvas; Tracks score of each player: 

  const gameLoop = () => {    
    ctx.fillStyle = "green"    //This is to prepare the playing field or canvas.
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ballController.draw(ctx)   //This is to draw the ball
    ballController.isBallOffScreen(ctx)
    goal.draw(ctx)      //This is to draw the goal on canvas.
    player2.draw(ctx)    //this is to draw the second player. He has a blue color.
    player1.draw(ctx)    //This is to draw the first player using the method of our class. He has a brown color.

    // let currentPlayer = player1     //This shows that playerOne starts the game.
    
  


    //To RECORD SCORE of players with taking turns between them:
   
    let scoreOne = 0
    let scoreTwo = 0
    
    let currentPlayer = player1

    const scoringOfResults1 = (sprite) => {
      if ((ballController.collideWith(sprite) && currentPlayer === player1)) {
        timer(5)    //This is to trigger the 5 second timer 
        scoreOne += 1        
        playerOne.totalScore += scoreOne
        p1Score.innerHTML = playerOne.totalScore           
      }
    } 
    scoringOfResults1(goal)

    const scoringOfResults2 = (sprite) => {
      if ((ballController.collideWith(sprite) && currentPlayer === player2)) {
        timer(5)    //This is to trigger the 5 second timer after score
        scoreTwo += 1        
        playerTwo.totalScore += scoreTwo
        p2Score.innerHTML = playerTwo.totalScore           
      }      
    }
    scoringOfResults2(goal)

    
    // To MAKE TURN for each player: 
    
    
    const playerTurns = () => {
      if(currentPlayer === player1) {
        if(player1.shoot()) {
          
          currentPlayer === player2              //After player1 shoots the ball, make turn for player2 
          
        } else {
              if(currentPlayer === player2) {        
                if(player2.shoot()) {
            
                  currentPlayer === player1
            
                }         
              }        
          }
      }
      playerTurns()
  
 
    // let turn = true

    // function makeTurns() {
    //   if (turn) {
    //   turn = false
    //   return playerOne.totalScore
    //   } else {
    //   turn = true
    //   return playerTwo.totalScore
    //   }
    // }
    // makeTurns()

    

    // e.target.textContent = currentPlayer.totalScore   //Here, I searched and found that evt.target is a reference to the object onto which the event was dispatched. https://developer.mozilla.org/en-US/docs/Web/API/Event/target

    // const playersTurn = (e) => {
    //   if(currentPlayer == player1) {
    //     return currentPlayer == player2        
    //     e.target.textContent = currentPlayer.totalScore 

    //   } else {
    //   // player2.draw(ctx)  //this is to draw the second player. He has a blue color.
    //     return currentPlayer == player1
    //     e.target.textContent = currentPlayer.totalScore
    //   }
    // }
    // playersTurn()  
    // }
    }
}
 

setInterval(gameLoop, 1000/70)   // This fixes speed of the ball when kicked. Note:1000 millisecond is 1 second


  //WIN scenario:

  const resultDisplay = document.querySelector('#gameResult')
  const endOfGame = () => {
    if (playerOne.totalScore >= 10 && playerTwo.totalScore < 10){      
      resultDisplay.innerHTML = 'Congratulations Player 1! <br> You won the Game!'
      console.log(playerOne.totalScore)
      // startGame()
      // nextLevel()
    } else if (playerTwo.totalScore >= 10 && playerOne.totalScore < 10){
      resultDisplay.innerHTML = 'Congratulations Player 2! <br> You won the Game!'
      console.log(playerTwo.totalScore)
      // startGame()
      // nextLevel()    
     if (playerOne.totalScore >= 10 && playerTwo.totalScore >= 10){
      resultDisplay.innerHTML = 'It is a tie. no one wins.'
      // startGame()
      // nextLevel()
    } 
  }
}
  endOfGame()


 //To create a TIMER that counts down from 5 seconds and stop each player from kicking the ball and turning the chance to the other player:

  let timerClock = document.querySelector('#clock')
  let timer = (t) => {
    if (t === -1) {    // Here, when I put t === 0, the countdown timer stops at 1 second.
      return    //This stops the timer from going less than zero in to negative seconds.
    }
    timerClock.innerHTML = t
    return setTimeout(() => {
      timer(--t)
    }, 1000)        //Here, I give the setTimeout of 1000ms for reducing the time.
  }
  timer(5)


