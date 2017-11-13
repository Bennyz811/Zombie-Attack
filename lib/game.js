import Player from './player.js';
import * as GraveYard from './graveyard.js'

class Game {
  constructor(ctx, gameCanvas, player){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [10 , 10]})
    this.bullets = [];
    this.zombies = [];
  }

  start(){
    this.draw()
    // GraveYard.spawnZombies()
  }

  draw(){
    requestAnimationFrame(this.draw.bind(this))
    this.player.update(this.ctx)
    this.player.bullets.forEach(b => {
      setInterval(() => {
        b.move()
      }, 1000);
      b.drawBullet(this.ctx);
    })
  }

  playerActions(){
    this.player.bullets.forEach(b => {
      b.draw(this.ctx)
    })
  }
}

export default Game;
