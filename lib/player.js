class Player {
  constructor(option){
    this.position = option.position
    this.controlls()
    this.gravity = 0.15
    this.velocity = 0
    this.lift = -3
    this.startX = canvas.width/2
    this.startY = canvas.height-10
    this.dx = 4
    this.dy = 4
    this.keys = []
    this.height = 10
    this.width = 10
    this.jumping = false;
    this.hero = new Image();
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
    ctx.fillRect(this.startX, this.startY, this.width, this.height)
    if(this.land()){
      this.jumping = false;
    }
  }

  jump() {
    if(!this.jumping){
      this.velocity += this.lift
    }
    this.jumping = true;
  }

  land(){
    return this.startY === canvas.height-this.height
  }

  update(ctx){
    this.velocity += this.gravity;
    this.startY += this.velocity;
    if (this.startY > ctx.canvas.height-this.height){
      this.velocity = 0
      this.startY = ctx.canvas.height-this.height
    }
    if (this.startY < 0){
      this.startY = 0
      this.velocity = 0
    }

    if(this.keys[38]){
      // up
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
