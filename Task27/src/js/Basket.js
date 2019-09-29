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
        this.$result = this.$basket.find(this.basket_result);
        this.$checkout = this.$basket.find(this.basket_button_check);
        this.books = [];
        this.$pricePlus;
        this.$priceMinus;
        this.$count;

        this.$close.click(() => this.toClose());
        this.$clean.click(() => this.reset())

    }
    redrow(books) {
        this.show();
        this.books = books;
        let booksArr = JSON.parse(window.localStorage.getItem('books')) ? JSON.parse(window.localStorage.getItem('books')) : [];
        let result = 0;
        for(let i = 0; i < this.books.length; i++) {
            let book = booksArr.find(item => item.id == this.books[i].id); 
            if(book) {
                let prise = +book.prise * +this.books[i].count;
                result += prise;
                this.$list.append(`<li data-id = "${book.id}" class="list__buy">
                        <div class="list__buy__content">
                            <p>название: ${book.title}</p>
                            <p class="list__by__prise">стоимость: ${book.prise}</p>
                            <div class="regulPrice">
                                <button class="regulPrice__button plus" type="button">
                                    +
                                </button>
                                <p class="list__buy__count">${this.books[i].count}</p>
                                <button class="regulPrice__button minus" type="button">
                                    -
                                </button>
                            </div>
                        </div>
                    </li>`);
               this.$count = this.$basket.find('.list__buy__count');
               this.event();
               this.getResult(result);
            }

        }

    }

    getResult(result) {
        this.$result.html(`Итого: ${result} бел.руб.`);
    }

    event() {
        this.$pricePlus = this.$basket.find('.plus');
        this.$priceMinus = this.$basket.find('.minus');
        this.$priceMinus.click((e) => this.regulPrise(e.target.parentElement, 'minus'));
        this.$pricePlus.click((e) => this.regulPrise(e.target.parentElement, 'plus'))
    }

    show() {
        this.$basket.toggleClass('basket_show');
    }

    toClose() {
        this.$basket.removeClass('basket_show');
    }

    regulPrise(elem, sign) {
        if(sign == "plus") {
            let count = +this.$count.html() + 1;
            this.$count.html(count);
        } else if(sign == "minus") {

        }
    }
}

module.exports = Basket;