class Bullets{
  constructor(option){
    this.x = 4
    this.y = 2
    this.posX = 0
    this.posY = 0
  }

  move(){
    this.x = this.x + 1;
  }

  drawBullet(ctx){
    // debugger
    this.move()
    ctx.fillRect(this.posX, this.posY, this.x, this.y);
    // ctx.eclipse(this.x, this.y, 20, 20);
  }

}

export default Bullets;
