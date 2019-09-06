$(function() {
	class ColorPicker {
		constructor(root_elem) {
			this.elem_input = '.color__recipient__color';
			this.elem_list = '.color__recipient__list';
			this.class_list_show = 'color__recipient__list_show';
			
			this.$input = $(root_elem).find(this.elem_input);
			this.$list = $(root_elem).find(this.elem_list);
			
			this.$input.focus(() => this.getColors());
		}
		
		getColors() {
			for(let i = 44; i <= 220; i += 44) {
				this.$list.append(`<li data-color=${i}, ${i}, ${i}></li>`);	
			}
			this.$list.removeClass().addClass(this.class_list_show);
		}
		
	}
	
	new ColorPicker('#color__recipient');
});