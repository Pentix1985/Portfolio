'use strict';

const list2 = {
    ProductsList: ProductItem,
    CartList: CartItem,
};

let cart = new CartList();
let products = new ProductsList(cart);
// products.getJson(`getProducts.json`).then(data => products.handleData(data));