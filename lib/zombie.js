class Zombie {
  constructor(startX, startY,    ctx){
    this.ctx = ctx
    this.startX = canvas.width-5
    this.startY = canvas.height
    this.disappear = false;
    this.dx = 30;
    this.dy = 30;
    this.update(ctx)
  }

  drawZombie(ctx){
    ctx.fillStyle = 'black'
    ctx.fillRect(this.startX, this.startY, this.dx, this.dy)
    this.move()
  }

  update(ctx){
    this.drawZombie(this.ctx)
  }

  death(){
    this.disappear = true;
  }
  
  move(){
    this.startX -= 4;
  }

}

export default Zombie;
