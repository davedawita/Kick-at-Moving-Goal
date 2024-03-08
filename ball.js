

export default class Ball {
  constructor(x, y, score) {
    this.x = x
    this.y = y
    this.speed = 6
    this.score = score  
    this.radius = 7
    this.color = 'white'
  }
  draw(ctx) {
    ctx.strokeStyle = 'white'    
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)    //This is for center of ball (197,390), radius = 7, starting angle = 0, ending angle = 2pi radians.
    ctx.fillStyle = this.color
    this.y -= this.speed    //This enables the ball to move. Going up on canvas is like going down in the x-y coordinate system.
    ctx.fill()    
    ctx.stroke()  
  }
  collideWith(sprite) {
   
      if(this.x < sprite.x + sprite.width &&
      this.x + this.radius > sprite.x 
      && this.y + this.radius >= sprite.y && this.y <= sprite.y + sprite.height
      ) {
        sprite.recordScore(this.score)    //This comes from goal.js
        return true        
      }
        return false
             
  }
}
