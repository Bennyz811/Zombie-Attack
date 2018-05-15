import Bullets from './bullets.js';

class Player {
  constructor(option){
    this.position = option.position;
    this.controlls();
    this.gravity = 0.35;
    this.velocity = 0;
    this.lift = -4.5;
    this.startX = 80;
    this.startY = canvas.height-10;
    this.dx = 6;
    this.dy = 6;
    this.keys = [];
    this.height = 60;
    this.width = 60;
    this.jumping = false;
    this.bullets = [];
    this.bulletDelay = 0;
    this.hp = 100;
    this.pause = false;
    this.killCount = 0;
    this.w = 0;
    this.h = 0;
    this.tick = 0;
    this.heroSprite = new Image();
    this.heroSprite.src = "app/assets/images/heroguy/gun/03-Shot/07.png";
    // this.heroSprite.src = "app/assets/images/hero_run.png";
  }

  controlls(){
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      this.keys[e.keyCode] = true;
    });
    document.addEventListener("keyup", (e) => {
      e.preventDefault();
      this.keys[e.keyCode] = false;
    });
  }

  fireBullets(ctx){
    let dx = this.dx;
    let dy = this.dy;
    let newBullets = new Bullets(this.startX+20, this.startY+10, dx, dy);
    this.bullets.push(newBullets);
    this.bulletDelay = 18;
  }

  move(ctx){
      if(this.bulletDelay === 0){
        this.fireBullets(ctx);
      } else {
      this.bulletDelay--;
    }
  }
  //
  // running(){
  //   ctx.drawImage(this.heroSprite, this.w * 485,this.h * 447, 485, 447, this.startX, this.startY, this.width, this.height);
  //   if(this.w === 2){
  //     this.w = 0;
  //   }
  //   this.tick++;
  //   if(this.tick > 25){
  //     this.w++;
  //     this.tick = 0;
  //   }
  // }

  draw(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(this.heroSprite, this.startX, this.startY, this.width, this.height);
    if(this.land()){
      this.jumping = false;
    }
    this.bullets = this.bullets.filter(b => {
      return b.startX < canvas.width + 20
    });
  }

  hero(){
    this.heroSprite.addEventListener("load", this.loadImage, false);
  }

  jump() {
    if(!this.jumping){
      this.velocity += this.lift;
    } else if (this.jumping){
      this.velocity += .1;
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
      this.velocity = 0;
      this.startY = ctx.canvas.height-this.height;
    }
    if (this.startY < 0){
      this.startY = 0;
      this.velocity = 0;
    }

    if(this.keys[38]){
      // up
      this.jump();
    }
    if(this.keys[40] && this.startY <= ctx.canvas.height - 15){
      // down
      this.startY += this.dy;
    }
    if(this.keys[39] && this.startX < ctx.canvas.width - 10){
      // right
      this.startX += this.dx;
    }
    if(this.keys[37] && this.startX >= 5){
      // left
      this.startX -= this.dx;
    }
    if(this.keys[32]){
      this.move(ctx);
    }
    this.draw(ctx);
  }
}

export default Player;
