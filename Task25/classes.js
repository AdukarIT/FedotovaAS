class Catalog {
	constructor(modalWindow, table) {
		this.table_tr = 'catalog__header';
		
		this.modalWindow = modalWindow;
		this.$table = $(table);
		this.$tr_head = this.$table.find('.catalog__header')
		this.$appender = $('.appender');
		
		this.books = [];
		this.load(() => this.redrow());
		this.$tr_product;
		this.$remover; 
		this.$appender.click(() => this.create());
		
	}
	
	load(callback) {
		$.ajax('https://raw.githubusercontent.com/AdukarIT/FedotovaAS/master/Task25/catalogBooks.json', {
			method: 'GET',
			dataType: 'json',
			success: data => {
				this.books = data;
				callback();
				this.initEvents();
			}		
		})
	}

	initEvents() {
		this.$tr_product = this.$table.find('.product');
		this.$remover = $('.remover_hiden');
		const self = this;
		this.$remover.click(function() {self.deleted(this)});
		this.$tr_product.click(function(event) {
			if(event.target.nodeName != 'BUTTON') self.edit(this.id);
		});
	}

	redrow() {
		this.books.forEach(item => {
			this.$table.append(`<tr class='product' id='${item.id}'>
				<td>${item.id}</td>
				<td class='product__name'>${item.title}</td>
				<td class='product__author'>${item.author}</td>
				<td class='product__prise'>${item.prise}</td>
				<td class='product__desc'>${item.description}</td>
				<td class='remover_hiden'> 
					<button type="button" class="btn btn-outline-success remover">
						-
					</button>
				</td>
			</tr>`)
		})
	}
	
	deleteBook(book) {
			let bookTable = this.$table.find(`#${book.id}`);
			bookTable.detach();
	}

	addBook(book) {
			this.$table.append(`<tr class='product' id='${book.id}'>
			<td>${book.id}</td>
			<td class='product__name'>${book.title}</td>
			<td class='product__author'>${book.author}</td>
			<td class='product__prise'>${book.prise}</td>
			<td class='product__desc'>${book.description}</td>
			<td class='remover_hiden'> 
				<button type="button" class="btn btn-outline-success remover">
					-
				</button>
			</td>
		</tr>`);
		
	} 

	createBook(book) {

	}

	generateId() {
		return this.books.length == 0 ? 1 : this.books[this.books.length - 1].id + 1;
	}
	
	create() {
		let bookObj = {
			id: this.generateId(),
			title: '',
			author: '',
			prise: '',
			description: ''
		}
		this.modalWindow.show(bookObj, book => {
			this.books.push(book);
			this.addBook(book);
		});
	}
	
	edit(book_id) {
		let book = this.books.find(function(elem) {
			return elem.id == book_id; 
		})
		this.modalWindow.show(book, book => {
			
		});
	}
	 
	deleted(remover) {
		let book = remover.parentElement;
		let index = this.books.findIndex(function(elem) {
			return elem.id == book.id; 
		})
		this.books.splice(index, 1);
		this.deleteBook(book);
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

	show(book, onSuccess) {
			this.$form.find('#form_name').val(book.title);
			this.$form.find('#form_author').val(book.author);
			this.$form.find('#form_prise').val(book.prise);
			this.$form.find('#form_description').val(book.description);				
			this.$modal.addClass('modal_show');	

			this.$save.click(() => {
				book.title = this.$form.find('#form_name').val();
				book.author = this.$form.find('#form_author').val();
				book.prise = this.$form.find('#form_prise').val();
				book.description = this.$form.find('#form_description').val();
				onSuccess(book);	
				this.hide();
			});
  }
    
 	hide() {
		this.$form.trigger('reset');
		this.$modal.removeClass('modal_show');
	}
}