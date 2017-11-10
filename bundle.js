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
    this.player.update(this.ctx)
  }

}

module.exports = Game


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map