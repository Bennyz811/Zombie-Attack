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
    this.hp = 3;
    this.internalClick = 0;
    this.speed = [0.8, 3, 1.2, 2, 4, 5][Math.floor(Math.random() * 6)];
    this.stop = this.stop.bind(this);
    this.h = 0;
    this.w = 0;
    this.tick = 0;
  }

  drawZombie(ctx){
    ctx.drawImage(this.zombieSprite, this.w * 430, this.h * 519, 430, 519, this.startX, this.startY-40, this.dx, this.dy);
    if(this.w === 2){
      this.w = 0;
    }
    this.tick++;
    if(this.tick > 35){
      this.w++;
      this.tick = 0;
    }
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
