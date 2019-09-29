class Gallery {
    constructor(gallery, basket) {
        this.gallery_ul = ".product__list";
        this.gallery_buttonBasket = ".button__checkout";
        this.gallery_button = "product__list__buttonBuy";
     
        
        this.$gallery = $(gallery);
        this.$ul = this.$gallery.find(this.gallery_ul);
        this.$buttonBasket = this.$gallery.find(this.gallery_buttonBasket);
        this.books;
        this.$button;
        this.basket = basket;
        this.basketBooks = [];

        this.redrow();
        this.$buttonBasket.click(() => this.openBasket(this.basketBooks));
    }
    //загружаем 
    //прорисовываем
    redrow() {
        this.books = JSON.parse(window.localStorage.getItem('books')) ? JSON.parse(window.localStorage.getItem('books')) : [];
        this.books.forEach(book => {
            this.$ul.append(`<li data-id = "${book.id}">
                <h1 class="product__list__title">${book.title}</h1>
                <span class=".product__list__author">${book.author}</span>
                <p class="product__list__item">${book.prise}</p>
                <p class="product__list__item">${book.description}</p>
                <button class="btn btn-success ${this.gallery_button}" type="button">
                    В корзину
                </button> 
            </li>`);
        });     
        this.$button = this.$gallery.find(`.${this.gallery_button}`);
        this.event();
    }

    event() {
        this.$button.click((event) => {
            let parentID = event.target.parentElement.dataset.id;
            event.target.innerHTML = 'уже добавлено';
            event.target.setAttribute('disabled', 'disabled')
            this.basketBooks.push({
                id: parentID,
                count: 1,
            })
        });
              
    }

    openBasket(books) {
        this.basket.redrow(books);
    }
}
module.exports = Gallery;