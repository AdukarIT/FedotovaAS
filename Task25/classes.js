class Catalog {
	constructor(modalWindow, table) {
		this.table_item = '.product';
		
		this.modalWindow = modalWindow;
		this.table = table;
		this.books = [];
		this.load();
		
		this.$tr_td = this.table.find(this.table_item);	
		this.$remover = $('.remover');
		this.$addition = $('.addition');
		
		this.$remover.click(() => add());
	}
	
	load() {
		
	}

	add() {
	
	}
	
}
	
class Modal {

}