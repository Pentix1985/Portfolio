'use strict';

let img = {
    currentImg: 0,
    images: [],

    init() {
        this.images = document.querySelectorAll('img');
        this.showImg();
    },

    showImg() {
        this.images[this.currentImg].classList.remove('hidden');
    },

    clickToLeft() {
        this.images[this.currentImg].classList.add('hidden');
        if(this.currentImg === 0) {
            this.currentImg = this.images.length - 1;
        } else {
            this.currentImg--;
        }
        this.showImg();
    },

    clickToRight() {
        this.images[this.currentImg].classList.add('hidden');
        if(this.currentImg === this.images.length - 1) {
            this.currentImg = 0;
        } else {
            this.currentImg++;
        }
        this.showImg();
    },    
}

let leftBtn = document.querySelector('.left-btn');
    leftBtn.addEventListener('click', (ev) => {
        img.clickToLeft();
    });

let rightBtn = document.querySelector('.right-btn');
    rightBtn.addEventListener('click', (ev) => {
        img.clickToRight();
    });

img.init();