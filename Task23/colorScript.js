$(function() {
	class ColorPicker {
		constructor(root_elem) {
			this.elem_input = '.color__recipient__color';
			this.elem_list = '.color__recipient__list';
			this.class_list_show = 'color__recipient__list_show';
			
			this.$input = $(root_elem).find(this.elem_input);
			this.$list = $(root_elem).find(this.elem_list);
			
			this.$input.focus( () => this.getColors() );
		};
		
		getColors() {
			this.$list.removeClass().addClass(this.class_list_show);
			
			let arrColors = this.generateColors();

			for(let j = 0; j < arrColors.length; j++) {
				this.$list.append(`<li data-color='${arrColors[j]}'></li>`)
			}

			this.paintOver();
			
			this.$list.children('li').click(e => {
				this.$input.val(`${e.target.dataset.color}`);
				this.$list.empty();
				this.$list.removeClass(this.class_list_show);
			})
			
		}

		generateColors() {
			let arrColors = [];
			for(let i = 44; i <= 220; i += 44) {
				arrColors.push(`rgb(${i}, ${i}, ${i})`);	
			}
			return arrColors;
		}

		paintOver() {
			for(let k = 0; k < this.$list.children('li').length; k++) {
				$(this.$list.children('li')[k]).css('background-color', this.$list.children('li')[k].dataset.color);
			}
		}
	}
	new ColorPicker('#color__recipient');
});


