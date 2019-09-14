class Catalog {
	constructor(modalWindow, table) {
		this.modalWindow = modalWindow;
		this.$table = $(table);

		this.$remover = $('.remover');
		this.$addition = $('.addition');
		
		this.books = [];
		this.load();		
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
		this.books.forEach(item => {
			this.$table.append(`<tr class='product' data-id='${item.id}'>
				<td>${item.id}</td>
				<td>${item.title}</td>
				<td>${item.author}</td>
				<td>${item.description}</td>
			</tr>`)
		})
	}
	
}
	
class Modal {

}