import Zombie from './zombie.js';
import * as Player from './player.js';

class GraveYard {
  constructor(ctx){
    this.ctx = ctx;
    this.zombies = [];
    this.startX = canvas.width-5;
    this.startY = canvas.height;
    this.dx = 4;
    this.dy = 4;
    this.spawnZombies();
  }

  spawnZombies(){
    let zom = new Zombie(this.startX, this.startY, this.ctx);
    // let count = this.killCount;
    // let res = 1;
    // if(count % 2 === 0){
    //   res = count;
    // }
    while (this.zombies.length !== 3){
        this.zombies.push(zom);
        
    }
  }
}

export default GraveYard;
