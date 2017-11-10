var startX = 150
var startY = 100
var dx = 5
var dy = 5
class Player {
  constructor(option){
    this.position = option.position
    this.controlls()
  }

  draw(ctx){
    ctx.fillRect(startX, startY, 10, 10)
  }

  update(ctx){
    this.draw(ctx);
  }

  controlls(){
    debugger
    document.addEventListener("keydown", (e) => {
      switch (e.keycode) {
        case 38:
        startY -= y
        break
        case 39:
        console.log('this is right');
        break
        case 37:
        console.log('this is left');
        break
        case 40:
        console.log('this is down');
        break
        default:
        console.log('this is not a key');
      }
    })
  }
}

module.exports = Player
