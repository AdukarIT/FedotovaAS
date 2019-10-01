class Gallery {
    constructor(gallery, basket) {
        this.gallery_ul = ".product__list";
        this.gallery_buttonBasket = ".product_button__checkout"; //заказать
        this.gallery_button = "product__list__buttonBuy";
     
        
        this.$gallery = $(gallery);
        this.$ul = this.$gallery.find(this.gallery_ul);
        this.$buttonBasket = this.$gallery.find(this.gallery_buttonBasket); //заказать 
        this.books; //массив из книг из хоста
        this.$button; //
        this.basket = basket; 
        this.basketBooks = []; //массив книг для корзины

        this.loadRedrow();
        this.$buttonBasket.click(() => this.openBasket());
    }
    //загружаем 
    //прорисовываем
    loadRedrow() {
        this.books = JSON.parse(window.localStorage.getItem('books')) ? JSON.parse(window.localStorage.getItem('books')) : [];
        this.books.forEach(book => {
            this.$ul.append(`<li data-id="${book.id} class="card">
                    <img src="https://i.pinimg.com/736x/e1/b8/c3/e1b8c3cc853fe4e5c99ae93e0c8977b6.jpg" class="card-img-top" alt="...">
                    <div class="card-body" data-id="${book.id}">
                        <h5 class="product__list__title card-title">
                            ${book.title}
                        </h5>
                        <p class=".product__list__author">
                            ${book.author}
                        </p>
                        <p class="product__list__item">
                            ${book.prise}
                        </p>
                        <p class="product__list__item card-text">
                            ${book.description}
                        </p>
                        <button class="btn btn-info ${this.gallery_button}" type="button">
                            В корзину
                        </button>
                    </div> 
                </li>`);
              });     
        this.$button = this.$gallery.find(`.${this.gallery_button}`);
        this.event();
    }

    event() {
        debugger;
        this.$button.click((event) => {
            debugger;
            let parentID = event.target.parentElement.dataset.id;
            event.target.innerHTML = 'уже добавлено';
            event.target.setAttribute('disabled', 'disabled')
            this.basketBooks.push({
                id: parentID,
                count: 1,
            })
            this.basket.redrow(this.basketBooks);
        });
              
    }

    openBasket() {
        this.basket.show()
    }
}
module.exports = Gallery;