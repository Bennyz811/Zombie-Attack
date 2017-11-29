import Game from './game.js';
import Background from './background.js';

document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.getElementById('canvas');
  const ctx = gameCanvas.getContext('2d');

  const bgCanvas = document.getElementById('background-canvas');
  const bgctx = bgCanvas.getContext('2d');

  const game = new Game(
    ctx,
    gameCanvas,
    bgctx
  );

  game.start();
});
