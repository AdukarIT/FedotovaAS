class Basket {
    constructor(basket) {
        this.basket_span_close = ".bascet__close";
        this.basket_list = ".basket__produсt";
        this.basket_clean = ".basket__clean";
        this.basket_result = ".basket__result";
        this.basket_button_check = ".basket__checkout";
        this.clean = ".basket__clean";

        this.$basket = $(`${basket}`);
        this.$close =  this.$basket.find(this.basket_span_close);
        this.$clean = this.$basket.find(this.clean);
        this.$list = this.$basket.find(this.basket_list);
        this.$result = this.$basket.find(this.basket_result);//итого
        this.$checkout = this.$basket.find(this.basket_button_check);//купить кнопка
        this.books = [];//айди и счет из галереи 
        this.booksArr = JSON.parse(window.localStorage.getItem('books')) ? JSON.parse(window.localStorage.getItem('books')) : []; //массив книг оф
        this.$pricePlus;//кнопки плюс
        this.$priceMinus;//минус 

        this.$close.click(() => this.toClose());
        this.$clean.click(() => this.reset())

    }
    redrow() { 
        this.books = JSON.parse(window.localStorage.getItem('booksID')); 
        this.$list.empty();
        if(this.books != undefined && this.books.length != 0) {
            $('.empty').remove();
                let result = 0;
                for(let i = 0; i < this.books.length; i++) {
                    let book = this.booksArr.find(item => item.id == this.books[i].id); 
                    if(book) {
                        let prise = +book.prise * +this.books[i].count;
                        result += prise;
                        this.$list.append(`<li data-id = "${book.id}" class="list__buy">
                                                <div class="list__buy__content">
                                                    <p>
                                                        название: ${book.title}
                                                    </p>
                                                    <p class="list__by__prise">стоимость: ${book.prise}</p>
                                                    <div class="regulPrice">
                                                        <button class="badge badge-info regulPrice__button plus" type="button">
                                                            +
                                                        </button>
                                                        <p class="badge badge-pill badge-warning list__buy__count">
                                                            ${this.books[i].count}
                                                        </p>
                                                        <button class="badge badge-info regulPrice__button minus" type="button">
                                                            -
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>`);
                    this.event();
                    this.getResult(result);
                    }

                }
        } else {
            this.$list.append('<p class="empty">Ваша корзина пуста</p>');
            this.$result.html(`Итого: 0 бел.руб.`);
        }

    }

    getResult(result) {
        this.$result.html(`Итого: ${result} бел.руб.`);
    }

    event() {
        this.$pricePlus = this.$basket.find('.plus');
        this.$priceMinus = this.$basket.find('.minus');
        this.$priceMinus.click((e) => this.regulPriseMinus(e));
        this.$pricePlus.click((e) => this.regulPrisePlus(e));
    }

    show() {
        this.$basket.toggleClass('basket_show');
        this.redrow();
    }

    toClose() {
        this.$basket.removeClass('basket_show');
    }

    regulPrisePlus(elem) {
        debugger;
            let count = $(elem).closest('.list__buy');
             this.booksArr.find(book => {
                if(book.id == count) {
                    book.count = +book.count + 1;
                    return true;
                } return false;
            });
            this.redrow()
    }
    regulPriseMinus() {

    }

    reset() {
        window.localStorage.removeItem('booksID'); 
        this.redrow();
    }
}

module.exports = Basket;