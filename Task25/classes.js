class Catalog {
	constructor(modalWindow, table) {
		this.modalWindow = modalWindow;
		this.$table = $(table);

	//	this.$remover = $('.remover');
		this.$appender = $('.appender');
		
		this.books = [];
		this.load();		
		this.$appender.click(() => this.create());
		this.$table.click((e) => this.edit(e));
	}
	
	load() {
		$.ajax('https://raw.githubusercontent.com/AdukarIT/FedotovaAS/master/Task25/catalogBooks.json', {
			method: 'GET',
			dataType: 'json',
			async: false,
			success: data => {
				this.books = data
			}
		})

		this.redrow();
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
    
    edit(e, some) {
		if($(e.target).parent().nodeName != 'TR' || $(e.target).parent().hasClass('catalog__header')) return;
		this.modalWindow.show();;
    }
    
    delete(some) {
    	// delete the Book from this.books
        // delete Book row from table
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