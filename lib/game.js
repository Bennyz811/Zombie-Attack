import Player from './player.js';
import GraveYard from './graveyard.js';
import Zombie from './zombie.js';
import Background from './background.js';

class Game {
  constructor(ctx, gameCanvas, bgctx, player){
    this.ctx = ctx;
    this.gameCanvas = gameCanvas;
    this.player = new Player({ position: [10 , 10]});
    this.bgctx = bgctx;
    this.createBg(bgctx);
    this.gameOver = false;
    this.startGame = true;
    this.g = new GraveYard(ctx);
    this.zombies = this.g.zombies;
    this.damages();
    this.pause = false;
    this.frameCount = 0;
    this.listeners();
  }

  start(){
    this.draw();
  }

  createBg(bgctx){
    let bgimg = new Image();
    bgimg.src = "app/assets/images/country.png";
    this.bg = new Background(this.bgctx, bgimg, -75, 890, 1.8);
  }

  bulletCollision(a, b){
    if(a.startX-25 < b.startX + b.dx &&
      a.startX + a.dx > b.startX&&
      a.startY-60 < b.startY + b.dy &&
      a.dy + a.startY > b.startY){
      return true;
    } else {
      return false;
    }
  }

  playerCollision(z, p){
    if(z.startX-25 < p.startX + p.dx &&
      z.startX + z.dx > p.startX &&
      z.startY-40 < p.startY + p.dy &&
      z.dy + z.startY > p.startY){
      return true;
    } else {
      return false;
    }
  }

  damages(){
    this.zombies.forEach(z => {
      this.player.bullets.forEach(b => {
        if (this.bulletCollision(z, b)){
          z.hp--;
          let idx = this.player.bullets.indexOf(b);
          this.player.bullets.splice(b, 1);
        }
      });
    });
    this.zombies.forEach(z => {
      if (this.playerCollision(z, this.player)){
        z.stop();
        this.player.hp -= 2;
      }
    });

    if(this.player.hp < 0){
      this.gameOver = true;
    }
    this.zombies.forEach((z, i) => {
      if(z.hp <= 0){
        this.player.killCount++;
        this.zombies.splice(i, 1);
      }
    });
  }

  draw(){
    if(this.startGame){
      this.startScreen();
      this.bg.draw();
    } else {
    if(this.pause){
      this.ctx.font = '50px serif';
      this.ctx.fillStyle = "FF6347";
      this.ctx.fillText('Paused', 320, 200);
    } else if(this.gameOver){
        this.gameOverScreen(this.ctx);
      } else {
        this.player.update(this.ctx);
        this.zombies.forEach((z,i) => {
          if(z.startX < -50){
            this.zombies.splice(i, 1);
          }
          z.update(this.ctx);
        });
        this.player.bullets.forEach(b => {
          b.drawBullet(this.ctx);
          b.move();
        });
        this.score();
        this.damages();
        this.g.spawnZombies();
        this.bg.draw();
      }
    }

    requestAnimationFrame(this.draw.bind(this));
  }

  score(){
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

  gameOverScreen(ctx){
    this.player = {};
    ctx.font = '50px serif';
    ctx.fillStyle = "FF6347";
    ctx.fillText("You've been eaten", 230, 200);
    ctx.font = '30px serif';
    ctx.fillStyle = "FF6347";
    ctx.fillText("Press 'r' to restart", 320, 300);
  }

  startScreen(){
    this.ctx.font = "20px san-serif";
    this.ctx.fillStyle = "#FF6347";
    this.ctx.fillText("Press 'enter' to start", 250, 100);
    this.ctx.font = "20px san-serif";
    this.ctx.fillStyle = "#FF6347";
    this.ctx.fillText("Use arrow keys to move", 300, 155);
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

  resetGame(){
    this.player = new Player({ position: [10 , 10]});
    this.zombies.length = 0;
    this.player.bullets.length = 0;
    this.gameOver = false;
  }

  listeners(){
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 80:
          this.pause = !this.pause;
          break;
        case 82:
          this.resetGame();
          break;
        case 13:
          this.startGame = false;
          break;
        default:
          break;
      }
    });
  }
}

export default Game;
