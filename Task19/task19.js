/* Взяв за основу галерею из примера, сделать галерею с кнопками прокрутки вперёд и назад.
Ссылки на изображения должны храниться не в массиве, а в <img> внутри .gallery. Например:
*/
$(function() {
	let imgGallery = $('.gallery img');
	let buttonPrev = $('.gallery > button')[0];
	let buttonNext = $('.gallery > button')[1];
	
	let position = 0;
	imgGallery.hide();
	imgGallery.eq(position).show();

	$('.gallery').click(function(e){
		imgGallery.eq(position).hide();
		
		e.target == buttonNext ? position += 1 : false;
		e.target == buttonPrev ? position -= 1 : false;
		position < 0 ? position = imgGallery.length - 1 : false; 
		position > imgGallery.length - 1 ? position = 0 : false;
		
		imgGallery.eq(position).show();
	});

/*Форма обратной связи содержит поля: имя, емейл, телефон, сообщение. 
Все поля обязательны для заполнения. Сообщение должно быть от 10 до 1000 знаков. 
После заполнения каждого из полей рядом с ним должна загораться галочка. 
При отправке формы выведите сообщение, если какие-то поля не заполнены, а также отмените отправку. */
	let input = $('form > input');
	let buttonEnter = $('form > button')[0];
	let buttonCancel = $('form > button')[1];
	let span = $('span')[0];
	let messageText = $('#message');
	
	messageText.attr('minlenght', '10');
	messageText.attr('maxlenght', '1000');
	
	input.focusout(function(e){
		if(e.target.type == 'text') {
			if(e.target == $('#message')[0] && e.target.value.length >=10 && e.target.value.length <= 1000) {
				e.target.after('<span>☑</span>');
			} else if(e.target.value.search(/[0-9]/) == -1 && e.target != $('#message')[0]){
				e.target.after('<span>☑</span>');
			}
		}
		if(e.target.type == 'number' && e.target.value.search(/[a-z]/) == -1) {
			e.target.after('<span>☑</span>');
		}
	});

	input.focus(function(e) {
		$('span').remove();
	});

	buttonEnter.addEventListener('click', function(e) {
		for(let i = 0; i < input.length; i++) {
			if(input[i].value.length == 0) {
				alert('not all fields are filled');
				e.preventDefault();
				break;
			}
		}
	});
	
	buttonCancel.addEventListener('click', function(e) {
		for(let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});
	
});