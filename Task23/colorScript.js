class ColorPicker {
		constructor(root_elem) {
			this.elem_input = '.color__recipient__color';
			this.elem_list = '.color__recipient__list';
			this.class_list_show = 'color__recipient__list_show';
			
			this.$input = $(root_elem).find(this.elem_input);
			this.$list = $(root_elem).find(this.elem_list);
			
			this.$input.focus( () => this.getColors() );
			this.arrColors = this.generateColors();
		};
		
		getColors() {
			this.$list.removeClass().addClass(this.class_list_show);
			
			this.generateList();
			
			$('body').click(e => {
				if(e.target.tagName == 'LI') this.$input.val(`${e.target.dataset.color}`);
				else if (e.target == this.$input[0]) return;
				this.$list.empty();
				this.$list.removeClass(this.class_list_show);
			});
			
		}

		generateColors() {
			let arrColors = [];
				for(let l = 0x00; l <= 0x180; l += 0x44) {
					arrColors.push(`rgb(${l}, ${0}, ${0})`);
					arrColors.push(`rgb(${0}, ${l}, ${0})`);
					arrColors.push(`rgb(${0}, ${0}, ${l})`);
				}
			return arrColors;
		}

		generateList() {
			for(let j = 0; j < this.arrColors.length; j++) {
				this.$list.append(`<li data-color='${this.arrColors[j]}'></li>`);
				$(this.$list.children('li')[j]).css('background-color', this.$list.children('li')[j].dataset.color);
			}
		}

}

$(function() {
	new ColorPicker('#color__recipient');
});

