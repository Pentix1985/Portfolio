let ezShop = {
    products: [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            img: "https://placeimg.com/640/480/animals"
        },

        {
            id: 2,
            name: "Product 2",
            price: 200,
            img: "https://placeimg.com/640/480/arch"
        },

        {
            id: 3,
            name: "Product 3",
            price: 300,
            img: "https://placeimg.com/640/480/nature"
        },

        {
            id: 4,
            name: "Product 4",
            price: 400,
            img: "https://placeimg.com/640/480/people"
        },

        {
            id: 5,
            name: "Product 5",
            price: 500,
            img: "https://placeimg.com/640/480/tech"
        },

        {
            id: 6,
            name: "Product 6",
            price: 600,
            img: "https://placeimg.com/640/480/tech/grayscale"
        },

        {
            id: 7,
            name: "Product 7",
            price: 700,
            img: "https://placeimg.com/640/480/tech/sepia"
        },
    ],

    /**
     * Метод запускает
     * -отображение продуктов
     * -добавление продуктов в корзину
     * -отображение корзины
     */
    init() {
        this.displayProducts();
        this.addProductInBasket();
        this.displayBasket();
    },

    /**
     * Метод отображает товар на странице
     */
    displayProducts() {
        const productsContainer = document.querySelector('.products');
        this.products.forEach((product) => {
            let item = new DisplayItemsOnPage(product.id, product.name, product.price, product.img);
            productsContainer.insertAdjacentHTML("beforeend", item.displayItemOnPage());
        });
    },

    /**
     * Метод добавляет товар в корзину или увеличиает количество товара при нажатии на кнопку "Купить"
     */
    addProductInBasket() {
        let buyBtn = document.querySelectorAll('.products__buy-btn');
        buyBtn.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                if (!this.checkProductInBasket(event.target.parentNode.dataset)) {
                    // Добавляем карточку товара в корзину
                    let basket = document.querySelector('.basket');
                    let item = new DisplayProductsInBasket(event.target.parentNode.dataset);
                    basket.append(item.addProductCardInBasket());
                    
                    // Удаляем сообщение "Нет товара в корзине."
                    this.removeAdvertisement();
                    // Меняем "Итого:"
                    this.theSumOfAllProducts();
                } else {
                    // Увиличиваем счетчик-количество товара
                    this.addProductCountInBasket(event.target.parentNode.dataset.id);
                    this.theSumOfAllProducts();
                }
            });
        });
    },

    


    /**
     * Метод включает/выключает отображение блока basket, содержимого корзины
     */
    displayBasket() {
        const cart = document.querySelector('.cart');
        const basket = document.querySelector('.basket');
        cart.addEventListener('click', () => {
            basket.classList.toggle("basket-visibile");  
        });
    },

    /**
     * Метод уаляет сообщение "Нет товаров в корзине." если оно есть или добавляет это сообщение если товара нет
     */
    removeAdvertisement() {
        let advertisement = document.querySelector('.basket__advertisement');
        advertisement.classList.add('basket__advertisement-visibile');
    },

    /**
     * Метод проверяет наличие карточки товара в корзине
     * @param {object} product Объект продукта со страницы с id, name, price
     * @returns {boolean} true - если карточка товара есть в корзине, false - если карточки нет
     */
    checkProductInBasket(product) {
        let basketItems = document.querySelectorAll('.basket__item');
        let include = false;
        basketItems.forEach((item) => {
            if(item.dataset.id === product.id) {
                include = true;
            }
        });

        return include;
    },

    /**
     * Метод увеличивает счетчик-количество товара в корзине
     */
    addProductCountInBasket(itemId) {
        let basketItems = document.querySelectorAll('.basket__item');
        basketItems.forEach((productInBasket) => {
            if(productInBasket.dataset.id === itemId) {
                let count = productInBasket.querySelector('.basket__count-number');
                let number = ++count.innerText;
                count.innerHTML = `${number}`;
            }
        });
        this.theSumOfAllProducts();
    },

    theSumOfAllProducts() {
        let basketItems = document.querySelectorAll('.basket__item');
        let totalBlockNumber = document.querySelector('.basket__total-price-number');
        let sum = 0;
        
        basketItems.forEach((productInBasket) => {
            let count = productInBasket.querySelector('.basket__count-number');
            sum += +productInBasket.dataset.price * +count.innerText;
        })

        totalBlockNumber.innerHTML = sum;
    }
} 

ezShop.init();

