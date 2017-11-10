const Player = require('./player');

class Game {
  constructor(ctx, gameCanvas){
    this.ctx = ctx
    this.gameCanvas = gameCanvas
    this.player = new Player({ position: [10 , 10]})
  }

  start(){
    this.draw()
  }

  draw(){
    requestAnimationFrame(this.draw.bind(this))
    this.player.update(this.ctx)
  }

}

module.exports = Game
