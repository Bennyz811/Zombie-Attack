const Player = require('./player');

class Game {
  constructor(ctx, gameCanvas){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [100 , 200]})
  }

  start(){
    window.setInterval(() => this.player.update(this.ctx), 30)
  }

}

module.exports = Game
