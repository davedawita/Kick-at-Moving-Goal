window.onload = () => {

  const showHide = document.querySelector('#showHide')
  const modalContainer = document.querySelector('.modalContainer')
  const closeBtn = document.querySelector('.closeBtn')
  

  showHide.addEventListener('click', function() {
    modalContainer.classList.add('show')
        
  })

  closeBtn.addEventListener('click', function() {
    modalContainer.classList.remove('show')
  })

  //Creating a moving ball function:

  // const ball = document.querySelector('#ball')

  // //I need to set position of the ball on the x-y coordinate system (Middle School Math). I also need the x and y speed of the ball i.e its speed in the x and y direction.

  // let x=0
  // let y=0
  // let xspeed = 5
  // let yspeed = 5

  // //Here, I need to update the x-y position of the ball by adding the x-y speed of the ball.
  // const animate = () => {
  //   x = x + xspeed
  //   y = y + yspeed

  //   // Then, whenever, the ball hits the goal or missed the goal, I need to reverse the x and y speed so that the ball returns back to the original position:

  //   const goal = docuemnt.querySelector('#Goal')
  //   if (x + 50 >= goal.innerwidth || x < 0) {
  //     xspeed = -xspeed
  //   }

  //   if (y + 50 >= goal.innerwidth || y < 0) {
  //     yspeed = -yspeed
  //   }
  //   ball.style.left = x + "px"
  //   ball.style.top = y + "px"
  //   requestAnimationFrame(animate)   //This is to implement an animation loop
    
  // }
  // animate()

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
  












}

