import Player from './player.js';

class Game {
  constructor(ctx, gameCanvas, player){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [10 , 10]})
    this.bullets = [];
  }

  start(){
    this.draw()
  }

  draw(){
    requestAnimationFrame(this.draw.bind(this))
    this.player.update(this.ctx)
    // this.player.bullets.forEach(b => b.draw(this.ctx))
  }

  playerActions(){
    this.player.bullets.forEach(b => {
      b.draw(this.ctx)
    })
  }
}

export default Game;
