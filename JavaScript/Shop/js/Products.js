class ProductsList extends List {
    constructor(cart, container = '.products', url = '/catalogData.json') {
        super(url, container)
        this.cart = cart;
        this.getJson()
            .then(data => this.handleData(data));
    }

    _init() {
        const bloclWithProducts = document.querySelector(this.container);
        bloclWithProducts.addEventListener('click', (event) => {
            if(event.target.className === 'buy-btn') {
                this.cart.addProduct(event.target);
            }
        });
    }

    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new this.list[this.constructor.name](product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem extends ListItem {}

