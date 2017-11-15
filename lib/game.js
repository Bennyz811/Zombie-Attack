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
    this.bgctx = bgctx;
    this.createBg(bgctx);
    this.gameOver = false;
    this.g = new GraveYard(ctx);
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
  
  colliding(a, b){
    if(a.startY + a.dy < b.startY || a.startY > b.startY + b.dy || 
      a.startX + a.dx < b.startX || b.startX > a.startX + a.dx){
      return false
    } else {
      return true
    }
  }
  
  damages(){
    this.zombies.forEach(z => (
      this.bullets.forEach(b => {
        if (this.colliding(z, b)){
          z.hp--
        } else if (this.colliding(z, this.player)){
          this.player.hp--
        }
      })
    ))
    
    if(this.player.hp <= 0){
      this.gameOver = true
      gameOverScreen(ctx)
    }
    this.zombies.forEach(z => {
      if(z.hp <= 0){
        this.z.deleteSelf()
      }
    })
    console.log(this.player.hp);
  }
  
  draw(){
    this.player.update(this.ctx)
    this.zombies = this.zombies.filter(z => {return z.startX > -50})
    this.zombies.forEach(z => {z.drawZombie(this.ctx)})
    this.player.bullets.forEach(b => {
      b.drawBullet(this.ctx)
      b.move()
    })
    requestAnimationFrame(this.draw.bind(this))
    this.bg.draw();
  }
  
  gameOverScreen(ctx){
    this.player = {}
    ctx.fillStyle = 'white'
    ctx.fillText("You've been eaten")
  }

}

export default Game;
