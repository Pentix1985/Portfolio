/**
 * Класс принимает на вход идентификатор, имя, цену и изображение товара
 */
class DisplayItemsOnPage {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }

    /**
     * Верстка карточки товара
     * @returns верстку в виде литерала
     */
    displayItemOnPage() {
        return `<div class="products__product" data-id="${this.id}" data-name="${this.name}" data-price="${this.price}">
                    <img src="${this.img}" alt="product-img">
                    <p class="products__product-name">${this.name}</p>
                    <p class="products__product-price">Цена: ${this.price}р.</p>
                    <button class="products__buy-btn">Купить</button>
                </div>`
    }
}