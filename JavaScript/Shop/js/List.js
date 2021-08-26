const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class List {
    constructor(url, container, list = list2) {
        this.container = container;
        this.list = list;
        this.url = url;
        this.goods = [];
        this.allProducts = [];
        this.filtered = [];
        this._init();
    }

    getJson(url) {
        return fetch(url ? url : `${API + this.url}`)
                .then(result => result.json())
                .catch(error => {
                    alert(`Error!`);
                });
    }

    handleData(data){
        this.goods = [...data];
        this.render();
    }

    render() {
        const block = document.querySelector(this.container);
        for(let item of this.goods) {
            const itemObj = new this.list[this.constructor.name](item);
            this.allProducts.push(itemObj);
            block.insertAdjacentHTML('beforeend', itemObj.render());
        }
    }

    filter(value){
        const regexp = new RegExp(value, 'i');
        this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));
        this.allProducts.forEach(el => {
            const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
            if(!this.filtered.includes(el)){
                block.classList.add('invisible');
            } else {
                block.classList.remove('invisible');
            }
        })
    }

    _init() {
        return false;
    }
}

class ListItem {
    constructor(item, img = 'https://placehold.it/200x150') {
        this.title = item.product_name;
        this.price = item.price;
        this.id = item.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn"
                    data-id="${this.id}"
                    data-name="${this.title}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>`
    }
}
