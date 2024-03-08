export default class Goal {     //I was thinking hard and thought that instead of creating a moving goal with translation animation over an image, it would give more sense to draw the goal on the canvas and put it on the x-y coordinate system so that I can track the score.
  constructor (x, y, velocity, score) {
   
    this.x = x
    this.y = y
    this.velocity = velocity  
    this.score = score
    this.width = 70     // This is for width of the goal.
    this.height = 50
    this.update = function() {   //This update function will serve to increase the speed when the game goes to next level.
      // this.draw(ctx)      
    }     
  }  

  //Below is to draw the goal with an image.
  draw(ctx) {      
    const img = new Image()
    img.src = "goal.jpg"
    ctx.drawImage(img, this.x, this.y, this.width, this.height)
    
  }
  
  // To move the goal sideways continuously:
  move() {
    this.x = this.x + this.velocity
    if ((this.x >= 400-this.width) ||  //Here, this is for the goal going to the right and reached boundary of the green canvas
    (this.x < 0 )) {        //Here, this is for the goal going to the left and reached boundary of the green canvas
      this.velocity = -this.velocity         //Here to invert the direction of the goal
      
    }  
               
  }

  recordScore() {
    this.score += 1
  }

  speed(velocity) {                     //This is added for the purpose of changing game levels by increasing velocity of moving goal.
    this.velocity = velocity
  }
     
}

