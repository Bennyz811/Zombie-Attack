class Bullets{
  constructor(startX, startY, dx, dy){
    this.dx = dx;
    this.dy = dy;
    this.gone = false;
    this.startX = startX;
    this.startY = startY;
  }

  move(){
    this.startX += 3;
  }

  destroyBullet(){
    this.gone = true;
  }

  drawBullet(ctx){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.startX+40, this.startY+30, this.dx, this.dy);
    this.move();
    this.destroyBullet();
  }

}

export default Bullets;
