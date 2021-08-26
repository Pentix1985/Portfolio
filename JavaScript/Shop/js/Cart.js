class CartList extends List {
    constructor(url = '/getBasket.json', container = ".cart" ) {
        super(url, container)
        this.getJson()
                .then(data => {
                    this.handleData(data.contents);
                })
    }

    _init() {
        document.querySelector('.btn-cart').addEventListener('click', (event) => {
            document.querySelector('.cart').classList.toggle('cart-display');
        });

        document.querySelector('.cart').addEventListener('click', (event) => {
            if(event.target.className === 'del-btn') {
                this.removeProduct(event.target);
            }

            if(event.target.className === 'product-bio__increaze') {
                this.addProduct(event.target);
            }

            if(event.target.className === 'product-bio__reduce') {
                this.reduce(event.target);
            }
        });
    }

    removeProduct(btn) {
        let productId = +btn.dataset.id;
        let find = this.allProducts.find((product) =>{
            return product.id === productId;
        });

        this.allProducts.splice(this.allProducts.indexOf(find), 1);
        document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
    }

    addProduct(btn) {
        let productId = +btn.dataset.id;
        let find = this.allProducts.find((product) =>{
            return product.id === productId;
        });
        if(find) {
            find.quantity++;
            this._updateCart(find);
        } else {
            let product = {
                id: productId,
                price: btn.dataset.price,
                title: btn.dataset.name,
                quantity: 1
            }
            this.allProducts.push(product);
            this._updateCart(product);
        }
        
    }

    reduce(btn) {
        let productId = +btn.dataset.id;
        let find = this.allProducts.find((product) =>{
            return product.id === productId;
        });
        find.quantity--;
        if(find.quantity === 0) {
            this.removeProduct(btn);
        } else {
            this._updateCart(find);
        }
    }

    _updateCart(item) {
        let block = document.querySelector(`.cart-item[data-id="${item.id}"]`);
        block.querySelector('.product-quantity').innerText = `Quantity: ${item.quantity}`;
        block.querySelector('.product-price').innerText = `$${item.price * item.quantity}`;
    }
}



class CartItem extends ListItem {
    constructor(item, img = 'https://placehold.it/200x150') {
        super(item, img)
        this.quantity = 1;
    }

    render() {
        return `<div class="cart-item" data-id="${this.id}">
            <div class="product-bio">
                <img src="${this.img}" alt="Some image">
                <div class="product-desc">
                    <p class="product-title">${this.title}</p>
                    <p class="product-quantity">Quantity: ${this.quantity}</p>
                    <p class="product-single-price">$${this.price} each</p>
                </div>
                <div class="product-bio__reduce-increaze">
                    <button class="product-bio__increaze" data-id="${this.id}">+</button>
                    <input class="product-bio__input" value="${this.quantity}">
                    <button class="product-bio__reduce" data-id="${this.id}">-</button>
                </div>
        </div>
            <div class="right-block">
                <p class="product-price">$${this.quantity*this.price}</p>
                <button class="del-btn" data-id="${this.id}">&times;</button>
            </div>
        </div>`
    }
}

