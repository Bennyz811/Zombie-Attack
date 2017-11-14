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

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var gameCanvas = document.getElementById('canvas');
  var ctx = gameCanvas.getContext('2d');

  // const bgCanvas = document.getElementById('canvas');
  // const bgctx = bgCanvas.getContext('2d')

  var game = new _game2.default(ctx, gameCanvas
  // bgctx
  );

  game.start();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

var _graveyard = __webpack_require__(4);

var _graveyard2 = _interopRequireDefault(_graveyard);

var _zombie = __webpack_require__(5);

var _zombie2 = _interopRequireDefault(_zombie);

var _background = __webpack_require__(6);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(ctx, gameCanvas, player) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.player = new _player2.default({ position: [10, 10] });
    this.bullets = [];
    this.zombies = [];
    // this.createBg(ctx)
    this.g = new _graveyard2.default(ctx);
    this.z = new _zombie2.default(null, null, ctx);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      this.draw();
      this.g.spawnZombies();
    }
  }, {
    key: 'createBg',
    value: function createBg(ctx) {
      var bgimg = new Image();
      bgimg.src = "./app/assets/images/Graveyard2.png";
      this.bg = new _background2.default(ctx, bgimg, -550, 1841, 2.8);
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this = this;

      this.player.update(this.ctx);
      this.g.spawnZombies();
      this.player.bullets.forEach(function (b) {
        window.setTimeout(b.drawBullet(_this.ctx), 5000), setTimeout(b.move(), 5000);
      });
      requestAnimationFrame(this.draw.bind(this));
      this.bg.draw();
    }
  }, {
    key: 'playerActions',
    value: function playerActions() {
      var _this2 = this;

      this.player.bullets.forEach(function (b) {
        b.draw(_this2.ctx);
      });
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
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
    this.heroSprite.src = "./app/assets/images/Hero-Guy-PNG/_Mode-Gun/02-Run/JK_P_Gun__Run_000.png";
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
      var newBullets = new _bullets2.default(this.startX, this.startY, dx, dy);
      this.bullets.push(newBullets);
    }
  }, {
    key: "move",
    value: function move() {
      this.startX += this.dx;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(this.heroSprite, this.startX, this.startY, this.width, this.height);
      if (this.land()) {
        this.jumping = false;
      }
    }
  }, {
    key: "hero",
    value: function hero() {
      this.heroSprite.addEventListener("load", this.loadImage, false);
    }
    //
    // animate(){
    //   draw();
    //   update();
    //   requestAnimationFrame(this.heroSprite.onload);
    // }

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
        console.log("pew");
        setTimeout(this.fireBullets(ctx), 5000);
      }
      this.draw(ctx);
    }
  }]);

  return Player;
}();

exports.default = Player;

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
  function Bullets(posX, posY, dx, dy) {
    _classCallCheck(this, Bullets);

    this.dx = dx;
    this.dy = dy;
    this.gone = false;
    this.posX = posX;
    this.posY = posY;
    this.x = 5;
    this.y = 5;
  }

  _createClass(Bullets, [{
    key: 'move',
    value: function move() {
      // this.dx += 5
      this.posX += 5;
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
      ctx.fillRect(this.posX + 20, this.posY + 30, this.dx, this.dy);
      // ctx.clearRect(this.posX-20, this.posY+30, this.dx, this.dy);
      this.move();
      this.destroyBullet();
    }
  }]);

  return Bullets;
}();

exports.default = Bullets;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zombie = __webpack_require__(5);

var _zombie2 = _interopRequireDefault(_zombie);

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
      var zom = new _zombie2.default(this.startX, this.startY, this.ctx);
      this.zombies.push(zom);
    }
  }]);

  return GraveYard;
}();

exports.default = GraveYard;

/***/ }),
/* 5 */
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
    this.startX = canvas.width - 5;
    this.startY = canvas.height;
    this.disappear = false;
    this.dx = 30;
    this.dy = 30;
    this.update(ctx);
  }

  _createClass(Zombie, [{
    key: 'drawZombie',
    value: function drawZombie(ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(this.startX, this.startY, this.dx, this.dy);
      this.move();
    }
  }, {
    key: 'update',
    value: function update(ctx) {
      this.drawZombie(this.ctx);
    }
  }, {
    key: 'death',
    value: function death() {
      this.disappear = true;
    }
  }, {
    key: 'move',
    value: function move() {
      this.startX -= 4;
    }
  }]);

  return Zombie;
}();

exports.default = Zombie;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  function Background(ctx, img, posY, imgLength, velocity) {
    _classCallCheck(this, Background);

    this.ctx = ctx;
    this.img = img;
    this.x = 0;
    this.velocity = velocity;
    this.posY = posY;
    this.imgLength = imgLength;
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
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map