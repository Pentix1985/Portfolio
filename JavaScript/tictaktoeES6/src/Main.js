'use strict';

window.addEventListener('load', () => {
    const board = new Board();
    const game = new Game();

    board.renderBoard();
    game.init(board);
    game.run();
})