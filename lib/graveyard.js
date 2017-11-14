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
  }

  spawnZombies(){
    let zom = new Zombie(this.startX, this.startY, this.ctx)
    this.zombies.push(zom);
    // return this.zombies
  }
}

export default GraveYard;
