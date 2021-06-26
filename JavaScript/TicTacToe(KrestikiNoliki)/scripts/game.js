'use strict';

let game = {

    сurrentPlayer: simbols.x,
    status: true,

    /**
     * Метод отрисовывает поле и добавляет обработчик события для кнопки "Начать игру"
     */
    init() {
        field.renderField();
        field.startBtnClicker();       
    },

    /**
     * Метод в котором происходит игра
     */
    run() {
        let fieldBoard = document.querySelector('.field');

        // Блок подсказка, чей ход
        let curPlayerBlock = document.querySelector('.cur-player');

        fieldBoard.addEventListener('mouseout', (evt) => {
            curPlayerBlock.style.display = 'none';
        });

        fieldBoard.addEventListener('mouseover', (evt) => {
            curPlayerBlock.style.display = 'block';
        });

        fieldBoard.addEventListener('mousemove', (evt) => {
            curPlayerBlock.style.top = evt.clientY + 10 + 'px';
            curPlayerBlock.style.left = evt.clientX + 10 + 'px';
        });

        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', player.squareClick);
        });        
    },
}

game.init();