const player = {

    /**
     * Метод обработки события при нажатии на ячейку
     * @param {Event} mouseevent 
     */
    squareClick(mouseevent) {
        let square = mouseevent.target;
        if(square.innerHTML === '') {
            square.insertAdjacentHTML("afterbegin", `${game.сurrentPlayer}`);

            if(player.isPlayerWin(game.сurrentPlayer)) {
                setTimeout(() => {
                    alert(`Won!`);
                    setTimeout(field.resetField, 0);
                }, 10);
            } else if(player.isDraw(game.сurrentPlayer)) {
                setTimeout(() => {
                    alert(`Nichya!`);
                    setTimeout(field.resetField, 0);
                 }, 10);
            } else {
                player.switchPlayer();
                player.switchPlayerInBlock();
            }
        }
    },

    /**
     * Метод проверяет выйграл ли игрок
     * @param {String} curPlayer Текущий игрок
     * @returns Boolean
     */
    isPlayerWin(curPlayer) {
        let squares = document.querySelectorAll('.square');

        if( 
            (squares[0].innerHTML === curPlayer && squares[1].innerHTML === curPlayer && squares[2].innerHTML === curPlayer) ||
            (squares[3].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[5].innerHTML === curPlayer) ||
            (squares[6].innerHTML === curPlayer && squares[7].innerHTML === curPlayer && squares[8].innerHTML === curPlayer) ||
            (squares[0].innerHTML === curPlayer && squares[3].innerHTML === curPlayer && squares[6].innerHTML === curPlayer) ||
            (squares[1].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[7].innerHTML === curPlayer) ||
            (squares[2].innerHTML === curPlayer && squares[5].innerHTML === curPlayer && squares[8].innerHTML === curPlayer) ||
            (squares[0].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[8].innerHTML === curPlayer) ||
            (squares[2].innerHTML === curPlayer && squares[4].innerHTML === curPlayer && squares[6].innerHTML === curPlayer)
            ) {
                return true;
            }
    },

    /**
     * Метод меняет игрока с "X" на "О"
     */
    switchPlayer() {
        game.сurrentPlayer === simbols.x ? game.сurrentPlayer = simbols.o : game.сurrentPlayer = simbols.x;
    },

    switchPlayerInBlock() {
        let curPlayerBlock = document.querySelector('.cur-player');
        curPlayerBlock.innerHTML = "";
        curPlayerBlock.insertAdjacentHTML("afterbegin", `${game.сurrentPlayer}`);
    },

    /**
     * Метод проверяет на ничью
     * @returns Boolean
     */
    isDraw() {
        let squares = document.querySelectorAll('.square');
        return [...squares].every(this.isNotEmpty);
    },

    /**
     * Метод проверяет есть ли символ в ячейке
     * @param {*} square 
     * @returns Boolean
     */
    isNotEmpty(square) {
        return square.innerHTML !== "";
    },
}