class Catalog {
	constructor(modalWindow, table) {
		this.table_tr = 'catalog__header';
		
		this.modalWindow = modalWindow;
		this.$table = $(table);
		this.$tr_head = this.$table.find('.catalog__header')
		this.$appender = $('.appender');
		
		this.books = [];
		this.load(() => this.redrow());
		this.$tr_product = this.$table.find('.product');
		this.$remover = $('.remover');
		
		this.$remover.click((event) => this.deleted(event))
		this.$appender.click(() => this.create());
		this.$tr_product.click(event => this.edit(event.target.dataset.id));
	}
	
	load(callback) {
		$.ajax('https://raw.githubusercontent.com/AdukarIT/FedotovaAS/master/Task25/catalogBooks.json', {
			method: 'GET',
			dataType: 'json',
			async: false,
			success: data => {
				this.books = data;
				callback();
			}		
		})

		
	}

	redrow() {
		this.books.forEach(item => {
			this.$table.append(`<tr class='product' data-id='${item.id}'>
				<td>${item.id}</td>
				<td>${item.title}</td>
				<td>${item.author}</td>
				<td>${item.prise}</td>
				<td>${item.description}</td>
				<td class='adder_hiden'> 
					<button type="button" class="btn btn-outline-success remover">
						-
					</button>
				</td>
			</tr>`)
		})
	}

	redrawBook(book) {
    	// redraws the only specified book row
        // set onclick listener to this.edit(), this.delete()}
	}

    save(book) {
    	// save book
        this.books[ some ] = book;
        this.redrawBook(book);
    }
    
    create() {
    	this.modalWindow.show();
    }
    
    edit(tr_id) {
		if(tr_id != undefined) {
			let tr = event.target.parentElement;
			this.modalWindow.show(tr);
		}
		return;
    }
    
    deleted(event) {
    	this.books[event.target.parentElement.dataset.id].remove();
			this.redrow();
    }



	
}
	
class Modal {
	constructor(modalWindow) {
		this.$modal = $(modalWindow);

		this.$form = this.$modal.find('.modal__content__form');
		this.$close = this.$modal.find('.modal__close');
		this.$save = this.$modal.find('.save');
		this.$cancel = this.$modal.find('.cancel');

		this.$cancel.click(() => this.hide());
		this.$close.click(() => this.hide());
		

	}


	show() {
		this.$modal.addClass('modal_show');
    }
    
    hide() {
		this.$form.trigger('reset');
		this.$modal.removeClass('modal_show');
    }
    
    save() {
    	this.book.title = // fill all the Book properties with its new values
        
    	this.saveCallback(this.book);
        this.hide();
    }


}