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

    clearStyle() {
        this.images[this.currentImg].removeAttribute('style');
    },

    clickToLeft() {
        this.images[this.currentImg].style.left = '600px';
        setTimeout(this.clearStyle.bind(img), 0);
        
        if(this.currentImg === 0) {
            this.currentImg = this.images.length - 1;
            this.images[this.currentImg].style.transition = 'none';
            this.images[this.currentImg].style.left = '-600px';
            this.showImg();
            setTimeout(this.clearStyle.bind(img), 0);

            } else {
            this.currentImg--;
            this.images[this.currentImg].style.transition = 'none';
            this.images[this.currentImg].style.left = '-600px';
            this.showImg();
            setTimeout(this.clearStyle.bind(img), 0);
        }
    },

    clickToRight() {
        this.images[this.currentImg].style.left = '-600px';
        setTimeout(this.clearStyle.bind(img), 0);

        if(this.currentImg === this.images.length - 1) {
            this.currentImg = 0;
            this.images[this.currentImg].style.transition = 'none';
            this.images[this.currentImg].style.left = '600px';
            this.showImg();
            setTimeout(this.clearStyle.bind(img), 0);

            } else {
            this.currentImg++;
            this.images[this.currentImg].style.transition = 'none';
            this.images[this.currentImg].style.left = '600px';
            this.showImg();
            setTimeout(this.clearStyle.bind(img), 0);
        }
        
    },    
}

let leftBtn = document.querySelector('.left-btn');
    leftBtn.addEventListener('click', (event) => {
        img.clickToLeft();
    });

let rightBtn = document.querySelector('.right-btn');
    rightBtn.addEventListener('click', (ev) => {
        img.clickToRight();
    });

img.init();