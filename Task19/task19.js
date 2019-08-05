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
	let mark = $('span.mark');
	mark.hide();
	
	let input = $('form > input');
	let buttonEnter = $('form > button')[0];
	let buttonCancel = $('form > button')[1];
	
	input = $('form > input').focusout(function(e){
		
	}) ;
	/*buttonEnter.click(function() {
		
	});*/
	
});