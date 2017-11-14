class Zombie {
  constructor(startX, startY, ctx){
    this.ctx = ctx
    this.startX = canvas.width
    this.startY = canvas.height-20 
    this.disappear = false;
    this.x = 20;
    this.y = 20;
  }

  drawZombie(ctx){
    ctx.fillStyle = 'black'
    ctx.fillRect(this.startX, this.startY, this.x, this.y)
    this.move()
  }

  update(ctx){
    this.drawZombie(ctx)
  }

  death(){
    this.disappear = true;
  }
  
  move(){
    this.startX -= 0.8;
  }

}

export default Zombie;
