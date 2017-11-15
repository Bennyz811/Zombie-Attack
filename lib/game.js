import Player from './player.js';
import GraveYard from './graveyard.js'
import Zombie from './zombie.js'
import Background from './background.js'

class Game {
  constructor(ctx, gameCanvas, bgctx, player){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [10 , 10]})
    this.bgctx = bgctx;
    this.createBg(bgctx);
    this.gameOver = false;
    this.g = new GraveYard(ctx);
    this.zombies = this.g.zombies;
    this.damages();
    this.z = new Zombie(null, null, ctx)
  }

  start(){
    this.draw()
    this.update()
    // this.g.zombies
  }
  
  createBg(bgctx){
    let bgimg = new Image()
    bgimg.src = "./app/assets/images/country.png"
    this.bg = new Background(this.bgctx, bgimg, -75, 890, 1.8)
  }
  
  colliding(a, b){
    if(a.startX < b.startX){
      return true
    } else {
      return false
    }
  }
  
  damages(){
    this.zombies.forEach(z => {
      this.player.bullets.forEach(b => {
        if (this.colliding(z, b)){
          z.hp--
          let idx = this.player.bullets.indexOf(b)
          this.player.bullets.splice(b, 1)
          console.log(z.hp);
        } else if (this.colliding(z, this.player)){
          this.stoptoEat()
          this.player.hp--
        }
      })
    })
    
    if(this.player.hp <= 0){
      this.gameOver = true
      this.gameOverScreen(this.ctx)
    }
    this.zombies.forEach(z => {
      if(z.hp <= 0){
        this.zombies.splice(z, 1)
      }
    })
    // console.log(this.player.hp);
  }
  
  draw(){
    this.player.update(this.ctx)
    this.zombies = this.zombies.filter(z => {return z.startX > -50})
    this.zombies.forEach(z => {z.update(this.ctx)})
    // this.zombies.forEach(z => {z.drawZombie(this.ctx)})
    this.player.bullets.forEach(b => {
      b.drawBullet(this.ctx)
      b.move()
    })
    this.damages()
    // debugger
    this.bg.draw();
    requestAnimationFrame(this.draw.bind(this))
  }
  
  update(){
    if(this.zombies.length === 0){
      this.g.spawnZombies()
    }
  }
  
  gameOverScreen(ctx){
    this.player = {}
    ctx.fillStyle = 'white'
    ctx.fillText("You've been eaten", 200, 400)
  }
  
  stoptoEat(){
    this.zombies.forEach(z => {
      if (z.startX === this.player.startX){
        z.startX = this.player.startX
      }
    })
  }

}

export default Game;
