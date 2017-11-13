class Bullets{
  constructor(posX, posY, dx, dy){
    this.dx = dx;
    this.dy = dy;
    this.gone = false;
    this.posX = posX;
    this.posY = posY;
    this.x = 5;
    this.y = 5;
  }

  move(){
    this.dx += 5
  }

  destroyBullet(){
    this.gone = true;
  }

  drawBullet(ctx){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.posX+20, this.posY+30, this.dx, this.dy);
    ctx.clearRect(this.posX-20, this.posY+30, this.dx, this.dy);
    this.move();
  }

}

export default Bullets;
