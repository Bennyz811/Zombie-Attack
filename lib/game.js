const Player = require('./player');

class Game {
  constructor(ctx){
    this.ctx = ctx
    this.player = new Player({ position: [100 , 200]})
  }


}

module.exports = Game
