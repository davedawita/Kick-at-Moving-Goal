
import Ball from "./ball.js"
export default class BallController {
  balls = []
  timerTillNextBall = 0     //This is to set timer for each kick. Here, I made it start from 0.
  constructor(canvas) {
    this.canvas = canvas
  }
  
  shoot(x,y,speed,delay) {      //Here, the variables are as defined in player.js under the shoot() method.
    if(this.timerTillNextBall <=0  ) {
      if(this.balls.length =1) {
      this.balls.push(new Ball(x,y,speed)) //This ball that is pushed in to the empty array of balls is imported from the ball.js.
      }     
      this.timerTillNextBall = delay
    }

    this.timerTillNextBall--
  }

  draw(ctx) {
    this.balls.forEach((ball) => ball.draw(ctx))   //This is a loop to show the ball at certain time interval with certain speed and at certain location (x,y). This is to move the ball towards the goal.
  }
}  