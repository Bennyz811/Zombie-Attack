/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(1);
const Player = __webpack_require__(2);

document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.getElementById('canvas');
  const ctx = gameCanvas.getContext('2d');

  const game = new Game(
    ctx,
    gameCanvas
  );
  game.start()
})


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Player = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Player {
  constructor(option){
    this.position = option.position
    this.controlls()
    this.gravity = 0.15
    this.velocity = 0
    this.lift = -3
    this.startX = canvas.width/2
    this.startY = canvas.height-10
    this.dx = 4
    this.dy = 4
    this.keys = []
    this.height = 10
    this.width = 10
    this.jumping = false;
  }

  controlls(){
    document.addEventListener("keydown", (e) => {
      e.preventDefault()
      this.keys[e.keyCode] = true;
    })
    document.addEventListener("keyup", (e) => {
      e.preventDefault()
      this.keys[e.keyCode] = false;
    })
  }

  draw(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillRect(this.startX, this.startY, this.width, this.height)
    if(this.land()){
      this.jumping = false;
    }
  }

  jump() {
    if(!this.jumping){
      this.velocity += this.lift
    }
    this.jumping = true;
  }

  land(){
    return this.startY === canvas.height-this.height
  }

  update(ctx){
    this.velocity += this.gravity;
    this.startY += this.velocity;
    if (this.startY > ctx.canvas.height-this.height){
      this.velocity = 0
      this.startY = ctx.canvas.height-this.height
    }
    if (this.startY < 0){
      this.startY = 0
      this.velocity = 0
    }

    if(this.keys[38]){
      // up
      this.jump()

    }
    if(this.keys[40] && this.startY <= ctx.canvas.height - 15){
      // down
      this.startY += this.dy
    }
    if(this.keys[39] && this.startX < ctx.canvas.width - 10){
      // right
      this.startX += this.dx
    }
    if(this.keys[37] && this.startX >= 5){
      // left
      this.startX -= this.dx
    }
    this.draw(ctx);
  }
}

module.exports = Player


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map