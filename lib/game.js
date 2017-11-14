import Player from './player.js';
import GraveYard from './graveyard.js'
import Zombie from './zombie.js'
import Background from './background.js'

class Game {
  constructor(ctx, gameCanvas, bgctx, player){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [10 , 10]})
    this.bullets = [];
    this.bgctx = bgctx
    this.createBg(bgctx)
    this.g = new GraveYard(ctx)
    this.zombies = this.g.zombies;
    this.z = new Zombie(null, null, ctx)
  }

  start(){
    this.draw()
    this.g.zombies
  }
  
  createBg(bgctx){
    let bgimg = new Image()
    bgimg.src = "./app/assets/images/country.png"
    this.bg = new Background(this.bgctx, bgimg, -75, 890, 1.8)
  }
  
  draw(){
    this.player.update(this.ctx)
    this.zombies.forEach(z => {
      z.drawZombie(this.ctx)
    })
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
