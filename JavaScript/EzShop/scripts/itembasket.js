
/**
 * Класс принимает на вход идентификатор, имя и цену товара, также имеет счётчик
 */
class DisplayProductsInBasket extends DisplayItemsOnPage {
    constructor({id, name, price}, count) {
        super(id, name, price);
        this.count = 1;
    }

    addProductCardInBasket() {
        // Формируем шаблон карточки
        this.template = document.querySelector('#itemCard').content;
        this.basketItem = this.template.cloneNode(true);
        this.basketItemCard = this.basketItem.querySelector('.basket__item');
        this.basketProductName = this.basketItem.querySelector('.basket__product-name');
        this.basketProductPrice = this.basketItem.querySelector('.basket__product-price');
        this.basketProductCount = this.basketItem.querySelector('.basket__product-count');
        this.basketPlusBtn = this.basketItem.querySelector('.basket__plus-btn');
        this.basketMinusBtn = this.basketItem.querySelector('.basket__minus-btn');
        this.basketCountNumber = this.basketItem.querySelector('.basket__count-number');
        this.basketRemoveBtn = this.basketItem.querySelector('.basket__remove-btn');

        // Заполняем содержимое карточки
        this.basketProductName.innerHTML = this.name;
        this.basketProductPrice.innerHTML = `Цена: ${this.price}`;
        this.basketCountNumber.innerHTML = this.count;

        this.basketItemCard.setAttribute("data-id", this.id);
        this.basketItemCard.setAttribute("data-name", this.name);
        this.basketItemCard.setAttribute("data-price", this.price);

        this.setEventListeners();

        // Возвращаем готовую карточку
        return this.basketItem;
    }

    /**
     * Метод вешает обработчики событий на кнопки в карточке товара в корзине
     */
    setEventListeners() {
        this.basketPlusBtn.addEventListener('click', (event) => {
            let item = event.target.parentNode;
            let count = item.querySelector('.basket__count-number');
            count.innerHTML = `${++count.innerText}`;
            ezShop.theSumOfAllProducts();
        });
        this.basketMinusBtn.addEventListener('click', (event) => {
            let item = event.target.parentNode;
            let count = item.querySelector('.basket__count-number');
            if (+count.innerText > 1) {
                count.innerHTML = `${--count.innerText}`;
            } else {
                let item2 = event.target.parentNode;
                let item3 = item2.parentNode;
                item3.remove();
            }
            ezShop.theSumOfAllProducts();
        });
        this.basketRemoveBtn.addEventListener('click', (event) => {
            let item = event.target.parentNode;
            item.remove();
            ezShop.theSumOfAllProducts();
        });
    }
}