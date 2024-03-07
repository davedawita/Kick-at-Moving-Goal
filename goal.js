export default class Goal {     //I was thinking hard and thought that instead of creating a moving goal with translation animation over an image, it would give more sense to draw the goal on the canvas and put it on the x-y coordinate system so that I can track the score.
  constructor (x, y) {
   
    this.x = x
    this.y = y
    this.velocity = 1
    this.width = 70     // This is for width of the goal.
    this.height = 50    
    this.update = function() {
      this.draw()      
    }

  }
  

  //Below is to draw the goal with an image.
  draw(ctx) {   
    const img = new Image()
    img.src = "goal.jpg"
    ctx.drawImage(img, this.x, this.y, this.width, this.height)
    
  }

  move(ctx) {
    this.x = this.x + this.velocity
    if ((this.x >= 400-this.width && velocity > 0) ||  //Here, this is for the goal going to the right and reached boundary of the green canvas
    (this.x <= 0 && velocity < 0)) {        //Here, this is for the goal going to the left and reached boundary of the green canvas
      velocity = velocity * - 1
    }  
    
  }
  
}



// update(ctx) {
//   ctx.clearRect
//   this.draw(ctx)
//   this.x += this.dx
// }


// let randomX = Math.random() * window.width
// let myGoal = new Goal(randomX, 0, 50)

// let updateGoal = function () {
//   requestAnimationFrame(updateGoal)
//   myGoal.update()
// }
// updateGoal()
