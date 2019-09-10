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
			
			
			$('body').click(e => {
				if(e.target.tagName == 'LI') this.$input.val(`${e.target.dataset.color}`);
				else if (e.target == this.$input[0]) return;
				this.$list.empty();
				this.$list.removeClass(this.class_list_show);
			});
			
		}

		generateColors() {
			let arrColors = [];
				for(let l = 44; l <= 220; l += 44) {
					arrColors.push(`rgb(${l}, ${0}, ${0})`);
					arrColors.push(`rgb(${0}, ${l}, ${0})`);
					arrColors.push(`rgb(${0}, ${0}, ${l})`);
					arrColors.push(`rgb(${l}, ${l}, ${0})`);
					arrColors.push(`rgb(${0}, ${l}, ${l})`);
					arrColors.push(`rgb(${l}, ${0}, ${l})`);
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


