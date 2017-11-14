import Player from './player.js';
import GraveYard from './graveyard.js'
import Zombie from './zombie.js'
import Background from './background.js'

class Game {
  constructor(ctx, gameCanvas, player){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [10 , 10]})
    this.bullets = [];
    this.zombies = [];
    // this.createBg(ctx)
    this.g = new GraveYard(ctx)
    this.z = new Zombie(null, null, ctx)
  }

  start(){
    this.draw()
    this.g.spawnZombies() 
  }
  
  createBg(ctx){
    let bgimg = new Image()
    bgimg.src = "./app/assets/images/Graveyard2.png"
    this.bg = new Background(ctx, bgimg, -550, 1841, 2.8)
  }
  
  draw(){
    this.player.update(this.ctx)
    this.g.spawnZombies()
    this.player.bullets.forEach(b => {
      window.setTimeout(b.drawBullet(this.ctx), 5000),
      setTimeout(b.move(), 5000)
    })
    requestAnimationFrame(this.draw.bind(this))
    this.bg.draw();
  }

  playerActions(){
    this.player.bullets.forEach(b => {
      b.draw(this.ctx)
    })
  }
}

export default Game;
