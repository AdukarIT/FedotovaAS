class Catalog {
	constructor(modalWindow, table) {
		this.table_item = '.catalog__header';
		
		this.modalWindow = modalWindow;
		this.table = table;
		this.books = [];
		this.load();
		
		this.$tr_td = $(this.table).find(this.table_item);	
		this.$remover = $('.remover');
		this.$addition = $('.addition');
		
		this.$remover.click(() => add());
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
		this.books.forEach(function(item) {
			this.$tr_td.append(`<tr class='product'><td>${item}</td><td></td><tr></td><td></td></tr>`)
		})
			
	}
	
}
	
class Modal {

}