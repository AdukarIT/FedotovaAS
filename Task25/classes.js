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
		this.$remover = $('.remover_hiden');

		const self = this;
		this.$remover.click(function() {self.deleted(this)});
		this.$appender.click(() => this.create());
		this.$tr_product.click(function(event) {
			if(event.target.nodeName != 'BUTTON') self.edit(this.id);
		});
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
		$('.product').detach();
		this.books.forEach(item => {
			this.$table.append(`<tr class='product' id='${item.id}'>
				<td>${item.id}</td>
				<td class='product__name entry'>${item.title}</td>
				<td class='product__author entry'>${item.author}</td>
				<td class='product__prise entry'>${item.prise}</td>
				<td class='product__desc entry'>${item.description}</td>
				<td class='remover_hiden'> 
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
	
	edit(book_id) {
		let book = this.$table.find($(`#${book_id}`)); 
		this.modalWindow.show(book);
	}
	 
	deleted(remover) {
		let book = $(remover).parent();
		let id = book.attr('id');
		this.books.splice(id - 1, 1, null);
		book.detach();
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
		this.$save.click(() => this.save());
	}

	show(items) {
		if(items != undefined) {
			let inputs = this.$form.find('input[type="text"]');
			let item = items.find('.entry');
			for(let i = 0; i < inputs.length; i++) {
				inputs[i].value = item[i].textContent;
			}
		}
		this.$modal.addClass('modal_show');	
  }
    
 	hide() {
		this.$form.trigger('reset');
		this.$modal.removeClass('modal_show');
	}
    
	save() {
    	
    this.hide();
  }


}