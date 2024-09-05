export default class Player2 {
  constructor(x,y,ballController) {
    this.x = x
    this.y = y
    this.ballController = ballController
    this.width = 30     // This is for the width of a player.
    this.height = 30    // This is for the height of a player.
    this.speed = 4      
    this.radius = 10    // This is for the round head of a player.
    this.name = 'player2'
    this.totalScore= 0


    document.addEventListener("keydown", this.keydown)
    document.addEventListener("keyup", this.keyup)   
        
  }


draw(ctx2) {
    
  ctx2.strokeStyle = 'blue'   // The strokeStyle property sets or returns the color, gradient, or pattern used for strokes. https://www.w3schools.com/jsref/canvas_strokestyle.asp
  

  //   To create player's head:
  ctx2.beginPath()
  ctx2.arc(197, 337, this.radius, 0, 2 * Math.PI)  // Here, I included 2pi to indicate a full circle - Middle school Math. 0 is the starting angle and 2pi is the ending angle (360 degrees). I fixed the x and y values of the head of the player by plugging in numbers with trial and error so that player's head can sit on his shoulder. Note that x and y values belong to the center
  ctx2.fillStyle = "black"
  ctx2.fill() 
  ctx2.stroke()
  

  // To create player's body:
  ctx2.strokeRect(this.x, this.y, this.width, this.height)
  ctx2.fillStyle = "black"
  ctx2.fillRect(this.x, this.y, this.width, this.height)


  // To create player's first leg
  ctx2.beginPath();
  ctx2.moveTo(202, 396);   //To move drawing cursor to starting point in x-y plane.
  ctx2.lineTo(202, 380);   //To draw by starting from starting point above to final point in the x-y plane.
  ctx2.lineWidth = 5
  ctx2.stroke();

  //To create player's second leg
  ctx2.beginPath();
  ctx2.moveTo(193, 396);   //To move drawing cursor to starting point in x-y plane.
  ctx2.lineTo(193, 380);   //To draw by starting from starting point above to final point in the x-y plane.
  ctx2.lineWidth = 5
  ctx2.stroke();

  // //To create player's first arm
  ctx2.beginPath();
  ctx2.moveTo(212, 347);   
  ctx2.lineTo(223, 378);   
  ctx2.stroke();

  // //To create player's second arm
  ctx2.beginPath();
  ctx2.moveTo(182, 347); 
  ctx2.lineTo(173, 379); 
  ctx2.lineWidth = 5
  ctx2.stroke();

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