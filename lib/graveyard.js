import Zombie from './zombie.js'

class GraveYard {
  constructor(ctx){
    this.ctx = ctx
    this.zombies = [];
    this.startX = canvas.width-5
    this.startY = canvas.height
    this.dx = 4
    this.dy = 4
    this.spawnZombies();
    this.update();
  }
    
  spawnZombies(){
    let zom = new Zombie(this.startX, this.startY, this.ctx)
    this.zombies.push(zom);
  }
  
  update(ctx){
    if(this.zombies.length === 0){
      this.spawnZombies()
    }
  }
}

export default GraveYard;
