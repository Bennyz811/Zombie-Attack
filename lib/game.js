import Player from './player.js';
import GraveYard from './graveyard.js'
import Zombie from './zombie.js'

class Game {
  constructor(ctx, gameCanvas, player){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [10 , 10]})
    this.bullets = [];
    this.zombies = [];
    this.g = new GraveYard(ctx)
    this.z = new Zombie(null, null, ctx)
  }

  start(){
    this.draw()
    this.g.spawnZombies() 
  }

  draw(){
    this.player.update(this.ctx)
    this.g.spawnZombies()
    this.player.bullets.forEach(b => {
      window.setTimeout(b.drawBullet(this.ctx), 5000),
      setTimeout(b.move(), 5000)
    })
    requestAnimationFrame(this.draw.bind(this))
  }

  playerActions(){
    this.player.bullets.forEach(b => {
      b.draw(this.ctx)
    })
  }
}

export default Game;
