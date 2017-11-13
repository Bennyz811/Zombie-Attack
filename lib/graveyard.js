import * as Zombie from './zombie.js'

class GraveYard {
  constructor(game){
    this.game = game;
  }

  spawnZombies(){
    this.game.zombies.push(new Zombie);
  }
}

export default GraveYard;
