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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bullets = __webpack_require__(3);

var _bullets2 = _interopRequireDefault(_bullets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(option) {
    _classCallCheck(this, Player);

    this.position = option.position;
    this.controlls();
    this.gravity = 0.15;
    this.velocity = 0;
    this.lift = -3;
    this.startX = canvas.width / 2;
    this.startY = canvas.height - 10;
    this.dx = 4;
    this.dy = 4;
    this.keys = [];
    this.height = 60;
    this.width = 60;
    this.jumping = false;
    this.bullets = [];
    this.heroSprite = new Image();
    this.heroSprite.src = "/Users/bennyzhao/Desktop/zombie_attack/app/assets/images/Hero-Guy-PNG/_Mode-Gun/02-Run/JK_P_Gun__Run_000.png";
  }

  _createClass(Player, [{
    key: "controlls",
    value: function controlls() {
      var _this = this;

      document.addEventListener("keydown", function (e) {
        e.preventDefault();
        _this.keys[e.keyCode] = true;
      });
      document.addEventListener("keyup", function (e) {
        e.preventDefault();
        _this.keys[e.keyCode] = false;
      });
    }
  }, {
    key: "fireBullets",
    value: function fireBullets(ctx) {
      var newBullets = new _bullets2.default(this.startX, this.startY);
      this.bullets.push(newBullets);
      for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].drawBullet(ctx);
        this.bullets[i].move();
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      // ctx.fillRect(this.startX, this.startY, this.width, this.height)
      // const heroSprite = new Image();
      // heroSprite.src = '../assets/images/Hero-Guy-PNG/_Mode-Gun/02-Run/JK_P_Gun__Run_000.png'
      ctx.drawImage(this.heroSprite, this.startX, this.startY, this.width, this.height);
      // const hero =
      this.fireBullets(ctx);
      // this.bullets.move();
      if (this.land()) {
        this.jumping = false;
      }
    }
  }, {
    key: "hero",
    value: function hero() {
      this.heroSprite.addEventListener("load", this.loadImage, false);
    }
  }, {
    key: "animate",
    value: function animate() {
      draw();
      update();
      requestAnimationFrame(this.heroSprite.onload);
    }
  }, {
    key: "jump",
    value: function jump() {
      if (!this.jumping) {
        this.velocity += this.lift;
      }
      this.jumping = true;
    }
  }, {
    key: "land",
    value: function land() {
      return this.startY === canvas.height - this.height;
    }
  }, {
    key: "update",
    value: function update(ctx) {
      this.velocity += this.gravity;
      this.startY += this.velocity;
      if (this.startY > ctx.canvas.height - this.height) {
        this.velocity = 0;
        this.startY = ctx.canvas.height - this.height;
      }
      if (this.startY < 0) {
        this.startY = 0;
        this.velocity = 0;
      }

      if (this.keys[38]) {
        // up
        this.jump();
      }
      if (this.keys[40] && this.startY <= ctx.canvas.height - 15) {
        // down
        this.startY += this.dy;
      }
      if (this.keys[39] && this.startX < ctx.canvas.width - 10) {
        // right
        this.startX += this.dx;
      }
      if (this.keys[37] && this.startX >= 5) {
        // left
        this.startX -= this.dx;
      }
      if (this.keys[32]) {
        console.log("pewpew");
        this.fireBullets(ctx);
      }
      this.draw(ctx);
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var gameCanvas = document.getElementById('canvas');
  var ctx = gameCanvas.getContext('2d');

  var game = new _game2.default(ctx, gameCanvas);

  game.start();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(ctx, gameCanvas, player) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.player = new _player2.default({ position: [10, 10] });
    this.bullets = [];
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      this.draw();
    }
  }, {
    key: 'draw',
    value: function draw() {
      requestAnimationFrame(this.draw.bind(this));
      this.player.update(this.ctx);
      // this.player.bullets.forEach(b => b.draw(this.ctx))
    }
  }, {
    key: 'playerActions',
    value: function playerActions() {
      var _this = this;

      this.player.bullets.forEach(function (b) {
        b.draw(_this.ctx);
      });
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullets = function () {
  function Bullets(option) {
    _classCallCheck(this, Bullets);

    this.x = 4;
    this.y = 2;
    this.posX = 0;
    this.posY = 0;
  }

  _createClass(Bullets, [{
    key: "move",
    value: function move() {
      this.x = this.x + 1;
    }
  }, {
    key: "drawBullet",
    value: function drawBullet(ctx) {
      // debugger
      this.move();
      ctx.fillRect(this.posX, this.posY, this.x, this.y);
      // ctx.eclipse(this.x, this.y, 20, 20);
    }
  }]);

  return Bullets;
}();

exports.default = Bullets;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map