'use strict';

class Game {
    constructor() {
        this.currPlayer = 'X';
        this.cells = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        this.status = 'playing';
    }

    /**
     * Инициируем игру, принмаем необходимы объекты
     * @param {object} board 
     */
    init(board) {
        this.board = board;
        this.message = board.message;
        this.gridElems = document.querySelectorAll('.grid-item');
    }

    /**
     * Запуск игры
     */
    run() {
        this.gridElems.forEach(gridEl => {
            gridEl.addEventListener('click', this.addClickListeners.bind(this));
        });
    }

    /**
     * Метод назначаемый в качестве обработчика события при килике по ячейке
     * @param {object} event 
     */
    addClickListeners(event) {
        if (this.status === 'playing') {
            this.addItemInCell(event);
            this.addItemInCellArr(event);

            if (this.isGameWon()) {
                this.setWonMessage();
                this.status = 'stop';
            }

            if (this.isGameDraw()) {
                this.setDrawMessage();
                this.status = 'stop';
            }

            this.changerCurrPlayer();
        }
    }

    /**
     * Метод вставляет в ячейку крестик или нолик
     * @param {object} event 
     */
    addItemInCell(event) {
        if (event.target.innerText === "") {
            event.target.innerText = this.currPlayer;
        }
    }

    /**
     * Метод помещает текущий символ (крестик или нолик) в массив
     * @param {object} event 
     */
    addItemInCellArr(event) {
        let x = +event.target.getAttribute('data-x');
        let y = +event.target.getAttribute('data-y');
        let symbol = event.target.innerText;
        this.cells[y][x] = symbol;
    }

    /**
     * Метод проводит проверку на победу
     * @returns {boolean}
     */
    isGameWon() {
        return this.isLineWon({y: 0, x: 0}, {y: 0, x: 1}, {y: 0, x: 2}) ||
               this.isLineWon({y: 1, x: 0}, {y: 1, x: 1}, {y: 1, x: 2}) ||
               this.isLineWon({y: 2, x: 0}, {y: 2, x: 1}, {y: 2, x: 2}) ||
               this.isLineWon({y: 0, x: 0}, {y: 1, x: 1}, {y: 2, x: 2}) ||
               this.isLineWon({y: 0, x: 2}, {y: 1, x: 1}, {y: 2, x: 0}) ||
               this.isLineWon({y: 0, x: 0}, {y: 1, x: 0}, {y: 2, x: 0}) ||
               this.isLineWon({y: 0, x: 1}, {y: 1, x: 1}, {y: 2, x: 1}) ||
               this.isLineWon({y: 0, x: 2}, {y: 1, x: 2}, {y: 2, x: 2});
    }

    /**
     * Метод проводит проверку на ничью
     * @returns {boolean}
     */
    isGameDraw() {
        let full = true;

        this.cells.forEach(elem => {
            elem.forEach(item => {
                if (item === "") {
                    full = false;
                }
            });
        });

        return full;
    }

    /**
     * Метод проводит проверку победных комбинаций
     * @returns {boolean}
     */
    isLineWon(a, b, c) {
        let value = this.cells[a.y][a.x] + this.cells[b.y][b.x] + this.cells[c.y][c.x];
        return value === "XXX" || value === "OOO";
    }


    /**
     * Метод меняет игрока с крестика на нолик или наоборот
     */
    changerCurrPlayer() {
        this.currPlayer === 'X'? this.currPlayer = 'O' : this.currPlayer = 'X';
    }

    /**
     * Метод выводит сообщение о победе текущего игрока
     */
    setWonMessage() {
        if (this.currPlayer === 'X') {
            this.message.innerText = `Победили крестики`;
        } else {
            this.message.innerText = `Победили нолики`;
        }
        
    }

    /**
     * Метод выводит сообщение о ничьей
     */
    setDrawMessage() {
        this.message.innerText = `Ничья! :(`;
    }
}