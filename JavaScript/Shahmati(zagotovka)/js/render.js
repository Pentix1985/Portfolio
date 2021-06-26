'use strict';

let render = {
    renderBoard() {
        this.renderChars();
        this.renderNumbers();
        this.renderField();
        this.renderFigure();
    },

    renderChars() {
        let chars = ["", "A", "B", "C", "D", "E", "F", "G", "H"];

        let wrapper = document.querySelector('.wrapper');

        for(let i = 0; i < config.rows; i++) {
            let wrapperBottom = `<div class="wrapper__bottom white-additions"><p>${chars[i]}</p></div>`;
            wrapper.insertAdjacentHTML('beforeend', wrapperBottom);
        }     
    },

    renderNumbers() {
        let wrapper = document.querySelector('.wrapper');
        for(let i = 1; i < config.columns; i++) {
            let wrapperLeft = `<div class="wrapper__left white-additions"><p>${i}</p></div>`;
            wrapper.insertAdjacentHTML('beforeend', wrapperLeft);
        }    
    },

    renderField() {
        let wrapper = document.querySelector('.wrapper');
        let field = `<div class="field"></div>`;
        wrapper.insertAdjacentHTML('beforeend', field);
        let charLine = document.querySelectorAll('.wrapper__bottom');
        let numLine = document.querySelectorAll('.wrapper__left');

        for(let i = 0; i < config.rows - 1; i++) {
            for(let j = 1; j < config.columns; j++) {
                let fieldDOM = document.querySelector('.field');
                let curX = numLine[i].firstChild.innerText.trim();
                let curY = charLine[j].firstChild.innerText.trim();
                let squares = null;

                if(i % 2 === 0 && (j-1) % 2 !== 0) {
                    squares = `<div class="square wrapper__black-field" data-y="${curY}" data-x="${curX}"></div>`;
                } else if(i % 2 !== 0 && (j-1) % 2 === 0) {
                    squares = `<div class="square wrapper__black-field" data-y="${curY}" data-x="${curX}"></div>`;
                } else {
                    squares = `<div class="square wrapper__white-field" data-y="${curY}" data-x="${curX}"></div>`;
                }

                fieldDOM.insertAdjacentHTML('beforeend', squares);
            }
        }
    },

    renderFigure() {
        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            if(Number(square.getAttribute(`data-x`)) === whiteFigures.chessPawn.startPosition.x) {
                square.insertAdjacentHTML('afterbegin', whiteFigures.chessPawn.view);
            }

            if(Number(square.getAttribute(`data-x`)) === blackFigures.chessPawn.startPosition.x) {
                square.insertAdjacentHTML('afterbegin', blackFigures.chessPawn.view);
            }

            for(let figure in whiteFigures) {
                if(figure !== "chessPawn") {
                    for(let startPoint of whiteFigures[figure].startPosition) {
                        if(startPoint.x === Number(square.getAttribute(`data-x`)) && startPoint.y === square.getAttribute(`data-y`)) {
                            square.insertAdjacentHTML('afterbegin', whiteFigures[figure].view);
                        }
                    }
                }
            }

            for(let figure in blackFigures) {
                if(figure !== "chessPawn") {
                    for(let startPoint of blackFigures[figure].startPosition) {
                        if(startPoint.x === Number(square.getAttribute(`data-x`)) && startPoint.y === square.getAttribute(`data-y`)) {
                            square.insertAdjacentHTML('afterbegin', blackFigures[figure].view);
                        }
                    }
                }
            }
        });
    },
}

