class Player {
  constructor(option){
    this.position = option.position
    this.controlls()
    this.gravity = 0.1
    this.velocity = 0
    this.lift = -1
    this.startX = 400
    this.startY = canvas.height-10
    this.dx = 5
    this.dy = 5
    this.keys = []
    this.jumping = false
  }

  controlls(){
    document.addEventListener("keydown", (e) => {
      e.preventDefault()
      this.keys[e.keyCode] = true;
    })
    document.addEventListener("keyup", (e) => {
      e.preventDefault()
      this.keys[e.keyCode] = false;
    })
  }

  draw(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillRect(this.startX, this.startY, 10, 10)
  }

  jump() {
    this.velocity += this.lift
  }

  update(ctx){
    this.velocity += this.gravity;
    this.startY += this.velocity;
    // debugger
    if (this.startY > ctx.canvas.height-10){
      this.velocity = 0
      this.startY = ctx.canvas.height-10
    }
    if (this.startY < 0){
      this.startY = 0
      this.velocity = 0
    }

    if(this.keys[38]){
      // up
      // startY -= dy
      this.jump()


    }
    if(this.keys[40] && this.startY <= ctx.canvas.height - 15){
      // down
      this.startY += this.dy
    }
    if(this.keys[39] && this.startX < ctx.canvas.width - 10){
      // right
      this.startX += this.dx
    }
    if(this.keys[37] && this.startX >= 5){
      // left
      this.startX -= this.dx
    }
    this.draw(ctx);
  }
}

module.exports = Player
