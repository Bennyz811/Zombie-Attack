class Zombie {
  constructor(startX, startY, ctx){
    this.ctx = ctx;
    this.startX = canvas.width;
    this.startY = canvas.height-20;
    this.destroy = false;
    this.dx = 60;
    this.dy = 65;
    this.zombieSprite = new Image();
    this.zombieSprite.src = "app/assets/images/walk.png";
    this.hp = 10;
    this.internalClick = 0;
    this.speed = [0.8, 3, 1.2, 2, 4, 5][Math.floor(Math.random() * 6)];
    this.stop = this.stop.bind(this);
  }

  drawZombie(ctx){
    ctx.drawImage(this.zombieSprite, 80, 50, 300, 500, this.startX, this.startY-40, this.dx, this.dy);
    this.move();
  }

  update(ctx){
    this.drawZombie(ctx);
  }

  deleteSelf(){
    this.destroy = true;
  }

  move(){
    this.startX -= this.speed;
  }

  stop(){
    this.startX += this.speed;
  }

}

export default Zombie;
