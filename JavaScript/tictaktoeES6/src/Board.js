'use strict';

class Board {
    constructor() {
        this.boardEl = document.querySelector('.grid-container');
        this.message = document.querySelector('.message');
    }

    /**
     * Отрисовка поля
     */
    renderBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let div = document.createElement('div');
                div.classList.add('grid-item');
                div.setAttribute('data-x', `${j}`);
                div.setAttribute(`data-y`, `${i}`);
                this.boardEl.append(div);
            }
        }
    }
}