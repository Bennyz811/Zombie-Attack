const Game = require('./game.js');
const Player = require('./player.js');

document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.getElementById('canvas');
  const ctx = gameCanvas.getContext('2d');

  const game = new Game(
    ctx,
    gameCanvas
  );
  game.start()
})
