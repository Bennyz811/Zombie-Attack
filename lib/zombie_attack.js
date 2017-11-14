import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.getElementById('canvas');
  const ctx = gameCanvas.getContext('2d');
  
  // const bgCanvas = document.getElementById('canvas');
  // const bgctx = bgCanvas.getContext('2d')

  const game = new Game(
    ctx,
    gameCanvas
    // bgctx
  );

  game.start();
});
