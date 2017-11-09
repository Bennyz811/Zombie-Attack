class Player {
  constructor(opt){
    this.position = opt.position
  }

  draw(ctx){
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

  update(ctx){
    this.draw(ctx);
  }
}

module.exports = Player
