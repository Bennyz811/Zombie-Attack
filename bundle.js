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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var _bullets = __webpack_require__(5);

var _bullets2 = _interopRequireDefault(_bullets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(option) {
    _classCallCheck(this, Player);

    this.position = option.position;
    this.controlls();
    this.gravity = 0.35;
    this.velocity = 0;
    this.lift = -4.5;
    this.startX = 80;
    this.startY = canvas.height - 10;
    this.dx = 6;
    this.dy = 6;
    this.keys = [];
    this.height = 60;
    this.width = 60;
    this.jumping = false;
    this.bullets = [];
    this.bulletDelay = 0;
    this.hp = 100;
    this.pause = false;
    this.killCount = 0;
    this.w = 0;
    this.h = 0;
    this.tick = 0;
    this.heroSprite = new Image();
    this.heroSprite.src = "app/assets/images/heroguy/gun/03-Shot/07.png";
    // this.heroSprite.src = "app/assets/images/hero_run.png";
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
      var dx = this.dx;
      var dy = this.dy;
      var newBullets = new _bullets2.default(this.startX + 20, this.startY + 10, dx, dy);
      this.bullets.push(newBullets);
      this.bulletDelay = 18;
    }
  }, {
    key: "move",
    value: function move(ctx) {
      if (this.bulletDelay === 0) {
        this.fireBullets(ctx);
      } else {
        this.bulletDelay--;
      }
    }
    //
    // running(){
    //   ctx.drawImage(this.heroSprite, this.w * 485,this.h * 447, 485, 447, this.startX, this.startY, this.width, this.height);
    //   if(this.w === 2){
    //     this.w = 0;
    //   }
    //   this.tick++;
    //   if(this.tick > 25){
    //     this.w++;
    //     this.tick = 0;
    //   }
    // }

  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(this.heroSprite, this.startX, this.startY, this.width, this.height);
      if (this.land()) {
        this.jumping = false;
      }
      this.bullets = this.bullets.filter(function (b) {
        return b.startX < canvas.width + 20;
      });
    }
  }, {
    key: "hero",
    value: function hero() {
      this.heroSprite.addEventListener("load", this.loadImage, false);
    }
  }, {
    key: "jump",
    value: function jump() {
      if (!this.jumping) {
        this.velocity += this.lift;
      } else if (this.jumping) {
        this.velocity += .1;
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
        this.move(ctx);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zombie = function () {
  function Zombie(startX, startY, ctx) {
    _classCallCheck(this, Zombie);

    this.ctx = ctx;
    this.startX = canvas.width;
    this.startY = canvas.height - 20;
    this.destroy = false;
    this.dx = 60;
    this.dy = 65;
    this.zombieSprite = new Image();
    this.zombieSprite.src = "app/assets/images/walk.png";
    this.hp = 3;
    this.internalClick = 0;
    this.speed = [0.8, 3, 1.2, 2, 4, 5][Math.floor(Math.random() * 6)];
    this.stop = this.stop.bind(this);
    this.h = 0;
    this.w = 0;
    this.tick = 0;
  }

  _createClass(Zombie, [{
    key: "drawZombie",
    value: function drawZombie(ctx) {
      ctx.drawImage(this.zombieSprite, this.w * 430, this.h * 519, 430, 519, this.startX, this.startY - 40, this.dx, this.dy);
      if (this.w === 2) {
        this.w = 0;
      }
      this.tick++;
      if (this.tick > 35) {
        this.w++;
        this.tick = 0;
      }
      this.move();
    }
  }, {
    key: "update",
    value: function update(ctx) {
      this.drawZombie(ctx);
    }
  }, {
    key: "deleteSelf",
    value: function deleteSelf() {
      this.destroy = true;
    }
  }, {
    key: "move",
    value: function move() {
      this.startX -= this.speed;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.startX += this.speed;
    }
  }]);

  return Zombie;
}();

exports.default = Zombie;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  function Background(ctx, img, posY, imgLength) {
    _classCallCheck(this, Background);

    this.ctx = ctx;
    this.img = img;
    this.x = 0;
    this.velocity = 0.7;
    this.posY = posY;
    this.imgLength = imgLength;
    // this.draw = this.draw.bind(this)
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      this.ctx.clearRect(0, 0, 800, 400);
      this.ctx.drawImage(this.img, this.x, this.posY);
      this.ctx.drawImage(this.img, this.x + this.imgLength, this.posY);
      if (this.imgLength < 800) {
        this.ctx.drawImage(this.img, this.x + this.imgLength * 2, this.posY);
      }
      if (this.x <= -this.imgLength) {
        this.x = 0;
      }
      this.x -= this.velocity;
      // requestAnimationFrame(this.draw())
    }
  }, {
    key: "start",
    value: function start() {
      this.draw();
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

var _background = __webpack_require__(2);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var gameCanvas = document.getElementById('canvas');
  var ctx = gameCanvas.getContext('2d');

  var bgCanvas = document.getElementById('background-canvas');
  var bgctx = bgCanvas.getContext('2d');

  var game = new _game2.default(ctx, gameCanvas, bgctx);

  game.start();
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _graveyard = __webpack_require__(6);

var _graveyard2 = _interopRequireDefault(_graveyard);

var _zombie = __webpack_require__(1);

var _zombie2 = _interopRequireDefault(_zombie);

var _background = __webpack_require__(2);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(ctx, gameCanvas, bgctx, player) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.player = new _player2.default({ position: [10, 10] });
    this.bgctx = bgctx;
    this.createBg(bgctx);
    this.gameOver = false;
    this.startGame = true;
    this.g = new _graveyard2.default(ctx);
    this.zombies = this.g.zombies;
    this.damages();
    this.pause = false;
    this.frameCount = 0;
    this.listeners();
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      this.draw();
    }
  }, {
    key: 'createBg',
    value: function createBg(bgctx) {
      var bgimg = new Image();
      bgimg.src = "app/assets/images/country.png";
      this.bg = new _background2.default(this.bgctx, bgimg, -75, 890, 1.8);
    }
  }, {
    key: 'bulletCollision',
    value: function bulletCollision(a, b) {
      if (a.startX - 25 < b.startX + b.dx && a.startX + a.dx > b.startX && a.startY - 60 < b.startY + b.dy && a.dy + a.startY > b.startY) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'playerCollision',
    value: function playerCollision(z, p) {
      if (z.startX - 25 < p.startX + p.dx && z.startX + z.dx > p.startX && z.startY - 40 < p.startY + p.dy && z.dy + z.startY > p.startY) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'damages',
    value: function damages() {
      var _this = this;

      this.zombies.forEach(function (z) {
        _this.player.bullets.forEach(function (b) {
          if (_this.bulletCollision(z, b)) {
            z.hp--;
            var idx = _this.player.bullets.indexOf(b);
            _this.player.bullets.splice(b, 1);
          }
        });
      });
      this.zombies.forEach(function (z) {
        if (_this.playerCollision(z, _this.player)) {
          z.stop();
          _this.player.hp -= 2;
        }
      });

      if (this.player.hp < 0) {
        this.gameOver = true;
      }
      this.zombies.forEach(function (z, i) {
        if (z.hp <= 0) {
          _this.player.killCount++;
          _this.zombies.splice(i, 1);
        }
      });
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this2 = this;

      if (this.startGame) {
        this.startScreen();
        this.bg.draw();
      } else {
        if (this.pause) {
          this.ctx.font = '50px serif';
          this.ctx.fillStyle = "FF6347";
          this.ctx.fillText('Paused', 320, 200);
        } else if (this.gameOver) {
          this.gameOverScreen(this.ctx);
        } else {
          this.player.update(this.ctx);
          this.zombies.forEach(function (z, i) {
            if (z.startX < -50) {
              _this2.zombies.splice(i, 1);
            }
            z.update(_this2.ctx);
          });
          this.player.bullets.forEach(function (b) {
            b.drawBullet(_this2.ctx);
            b.move();
          });
          this.score();
          this.damages();
          this.g.spawnZombies();
          this.bg.draw();
        }
      }
      console.log(this.player.startX, this.player.startY, this.player.position);
      requestAnimationFrame(this.draw.bind(this));
    }
  }, {
    key: 'score',
    value: function score() {
      this.ctx.font = '20px serif';
      this.ctx.fillStyle = 'FF6347';
      this.ctx.fillText('Score', 50, 50);
      this.ctx.font = '20px serif';
      this.ctx.fillStyle = 'FF6347';
      this.ctx.fillText(this.player.killCount, 130, 50);
      this.ctx.font = '20px serif';
      this.ctx.fillStyle = 'FF6347';
      this.ctx.fillText(this.player.hp, 720, 50);
      this.ctx.font = '20px serif';
      this.ctx.fillStyle = 'FF6347';
      this.ctx.fillText('Health', 640, 50);
    }
  }, {
    key: 'gameOverScreen',
    value: function gameOverScreen(ctx) {
      this.player = {};
      ctx.font = '50px serif';
      ctx.fillStyle = "FF6347";
      ctx.fillText("You've been eaten", 230, 200);
      ctx.font = '30px serif';
      ctx.fillStyle = "FF6347";
      ctx.fillText("Press 'r' to restart", 320, 300);
    }
  }, {
    key: 'startScreen',
    value: function startScreen() {
      this.ctx.font = "30px san-serif";
      this.ctx.fillStyle = "#FF6347";
      this.ctx.fillText("Press 'enter' to start", 250, 100);
      this.ctx.font = "20px san-serif";
      this.ctx.fillStyle = "#FF6347";
      this.ctx.fillText("Use arrow keys to move and JUMP", 300, 155);
      this.ctx.font = "20px san-serif";
      this.ctx.fillStyle = "#FF6347";
      this.ctx.fillText("HOLD space bar to shoot", 300, 180);
      this.ctx.font = "20px san-serif";
      this.ctx.fillStyle = "#FF6347";
      this.ctx.fillText("Press 'p' to PAUSE", 300, 205);
      this.ctx.font = "20px san-serif";
      this.ctx.fillStyle = "#FF6347";
      this.ctx.fillText("Press 'r' to RESTART", 300, 230);
      this.ctx.font = '30px san-serif';
      this.ctx.fillStyle = '#FF6347';
      this.ctx.fillText("Kill as many as you can", 250, 300);
    }
  }, {
    key: 'resetGame',
    value: function resetGame() {
      this.player = new _player2.default({ position: [10, 10] });
      this.zombies.length = 0;
      this.player.bullets.length = 0;
      this.gameOver = false;
    }
  }, {
    key: 'listeners',
    value: function listeners() {
      var _this3 = this;

      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 80:
            _this3.pause = !_this3.pause;
            break;
          case 82:
            _this3.resetGame();
            break;
          case 13:
            _this3.startGame = false;
            break;
          default:
            break;
        }
      });
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullets = function () {
  function Bullets(startX, startY, dx, dy) {
    _classCallCheck(this, Bullets);

    this.dx = dx;
    this.dy = dy;
    this.gone = false;
    this.startX = startX;
    this.startY = startY;
  }

  _createClass(Bullets, [{
    key: 'move',
    value: function move() {
      this.startX += 3;
    }
  }, {
    key: 'destroyBullet',
    value: function destroyBullet() {
      this.gone = true;
    }
  }, {
    key: 'drawBullet',
    value: function drawBullet(ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.startX + 40, this.startY + 30, this.dx, this.dy);
      this.move();
      this.destroyBullet();
    }
  }]);

  return Bullets;
}();

exports.default = Bullets;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zombie = __webpack_require__(1);

var _zombie2 = _interopRequireDefault(_zombie);

var _player = __webpack_require__(0);

var Player = _interopRequireWildcard(_player);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraveYard = function () {
  function GraveYard(ctx) {
    _classCallCheck(this, GraveYard);

    this.ctx = ctx;
    this.zombies = [];
    this.startX = canvas.width - 5;
    this.startY = canvas.height;
    this.dx = 4;
    this.dy = 4;
    this.spawnZombies();
  }

  _createClass(GraveYard, [{
    key: 'spawnZombies',
    value: function spawnZombies() {
      while (this.zombies.length !== 3) {
        var zom = new _zombie2.default(this.startX, this.startY, this.ctx);
        this.zombies.push(zom);
      }
    }
  }]);

  return GraveYard;
}();

exports.default = GraveYard;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map