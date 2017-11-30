class Background {
  constructor(ctx, img, posY, imgLength){
    this.ctx = ctx;
    this.img = img;
    this.x = 0;
    this.velocity = 0.7;
    this.posY = posY;
    this.imgLength = imgLength;
    // this.draw = this.draw.bind(this)
  }

  draw(){
    this.ctx.clearRect(0, 0, 800, 400);
    this.ctx.drawImage(this.img, this.x, this.posY);
    this.ctx.drawImage(this.img, this.x + this.imgLength, this.posY);
    if(this.imgLength < 800){
      this.ctx.drawImage(this.img, this.x + this.imgLength * 2, this.posY);
    }
    if(this.x <= -this.imgLength){
      this.x = 0;
    }
    this.x -= this.velocity;
    // requestAnimationFrame(this.draw())
  }

  start(){
    this.draw();
  }
}

export default Background;
