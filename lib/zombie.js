class Zombie {
  constructor(){
    this.startX = [0, canvas.width][Math.floor(Math.random() * 2)]
    this.startY = canvas.height
    this.disappear = false;
  }

  drawZombie(ctx){
    this.move()
    ctx.fillRect(this.startX, this.startY, 10, 10)
  }

  update(){
  }

  death(){
    this.disappear = true;
  }
  move(){
    this.startX += 4;
  }

}

export default Zombie;
