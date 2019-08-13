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
	
	input.focusout(function(e){
		if(e.target.type == 'text') {
			if(e.target == $('#message')[0] && e.target.value.length >=10 && e.target.value.length <= 1000) {
				e.target.after($(document.createElement('span'));
				span.text(.html('☑'));
			} else if(e.target.value.search(/[0-9]/) == -1 && e.target.value.lengt > 4){
				e.target.after($(document.createElement('span').text('☑')));
			}
		}
		if(e.target.value.lengt < 5) {
			e.target.after($(document.createElement('span').text('☑')));
		}
	});
	input.focus(function(e) {
		$(e.target > span).remove();
	});
	/*buttonEnter.click(function() {
		
	});*/
	
});