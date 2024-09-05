
export default class Player1 {
  constructor(x,y,ballController) {
    this.x = x
    this.y = y
    this.ballController = ballController
    this.width = 30     // This is for the width of a player.
    this.height = 30    // This is for the height of a player.
    this.speed = 4      
    this.radius = 10    // This is for the round head of a player.
    this.name = 'player1'
    this.totalScore= 0
    document.addEventListener("keydown", this.keydown)
    document.addEventListener("keyup", this.keyup)   
        
  }

  draw(ctx) {
    
    ctx.strokeStyle = 'brown'   // The strokeStyle property sets or returns the color, gradient, or pattern used for strokes. https://www.w3schools.com/jsref/canvas_strokestyle.asp
    

    //   To create player's head:
    ctx.beginPath()
    ctx.arc(197, 337, this.radius, 0, 2 * Math.PI)  // Here, I included 2pi to indicate a full circle - Middle school Math. 0 is the starting angle and 2pi is the ending angle (360 degrees). I fixed the x and y values of the head of the player by plugging in numbers with trial and error so that player's head can sit on his shoulder. Note that x and y values belong to the center
    ctx.fillStyle = "black"
    ctx.fill() 
    ctx.stroke()
    

    // To create player's body:
    ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = "black"
    ctx.fillRect(this.x, this.y, this.width, this.height)


    // To create player's first leg
    ctx.beginPath();
    ctx.moveTo(202, 396);   //To move drawing cursor to starting point in x-y plane.
    ctx.lineTo(202, 380);   //To draw by starting from starting point above to final point in the x-y plane.
    ctx.lineWidth = 5
      ctx.stroke();

    //To create player's second leg
    ctx.beginPath();
    ctx.moveTo(193, 396);   //To move drawing cursor to starting point in x-y plane.
    ctx.lineTo(193, 380);   //To draw by starting from starting point above to final point in the x-y plane.
    ctx.lineWidth = 5
    ctx.stroke();

    // //To create player's first arm
    ctx.beginPath();
    ctx.moveTo(212, 347);   
    ctx.lineTo(223, 378);   
    ctx.stroke();

    // //To create player's second arm
    ctx.beginPath();
    ctx.moveTo(182, 347); 
    ctx.lineTo(173, 379); 
    ctx.lineWidth = 5
    ctx.stroke();

    this.shoot()    //This is a function for kicking the ball.
    
  }

 
  shoot(){
    if (this.shootPressed) {
      console.log("shoot")
      const speed = 5
      const delay = 7      
      const ballX = this.x + this.width/2  //This is to fix postion of ball before each kick.
      const ballY = this.y + this.height * 1.4              //This is to fix postion of ball before each kick.
      this.ballController.shoot(ballX,ballY,speed,delay)
      
    }
  }    
 
  keydown = (e) => {
    if (e.code === "Space") {
      this.shootPressed = true
    }  
  }

  keyup = (e) => {
    if (e.code === "Space") {
      this.shootPressed = false
    }

  }

  

  
}



