
import Ball from "./ball.js"
export default class BallController {
  balls = []
  timerTillNextBall = 0     //This is to set timer for each kick. Here, I made it start from 0.
  constructor(canvas) {
    this.canvas = canvas
  }
  
  shoot(x,y,speed, delay, score) {      //Here, the variables are as defined in player.js under the shoot() method.
    if(this.timerTillNextBall <=0  ) {
      if(this.balls.length =1) {
      this.balls.push(new Ball(x,y,speed, score)) //This ball that is pushed in to the empty array of balls is imported from the ball.js.
      }     
      this.timerTillNextBall = delay
    }

    this.timerTillNextBall--
  }

  draw(ctx) {
    this.balls.forEach((ball) => {
      if(this.isBallOffScreen(ball)) {
        const index = this.balls.indexOf(ball)   
        this.balls.splice(index,1)              //We need to remove off-Screen balls to make the code work.
    
      }
      ball.draw(ctx)   //This is a loop to show the ball at certain time interval with certain speed and at certain location (x,y). This is to move the ball towards the goal.})

    })  
  }   

  isBallOffScreen(ball) {
      return ball.y <= -ball.height     //I need to remove the ball after it passes the top edge of the green canvas.
    }

  
  collideWith(sprite) {   //A sprite is a 2-dimensional image used in video games or animation.  Note that our sprite for this game is the goal.
    return this.balls.some(ball=>{    //The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
      if(ball.collideWith(sprite)){
        this.balls.splice(this.balls.indexOf(ball),1)   //This removes the ball (element at the index of the balls array) that collided with the sprite (goal)
        return true   //If collision occurs, true
      }
      return false    //If collision does not occur, false
    })
  }

}  

