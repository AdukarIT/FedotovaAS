/* Взяв за основу галерею из примера, сделать галерею с кнопками прокрутки вперёд и назад.
Ссылки на изображения должны храниться не в массиве, а в <img> внутри .gallery. Например:
*/
$(function() {
	let imgGallery = $('.gallery').children('img');
	let buttonPrev = $('.gallery > button')[0];
	let buttonNext = $('.gallery > button')[1];
	
	let position = 0;
	imgGallery.hide();
	imgGallery[position].show();

	$('.gallery').click(function(){
		imgGallery[position].hide();

		if(position < 0 || position > 3) position == 0
		if(e.target == buttonNext) position++;
		else if(e.target == buttonPrev) position--;

		imgGallery[position].show();
	});
});
/*Форма обратной связи содержит поля: имя, емейл, телефон, сообщение. 
Все поля обязательны для заполнения. Сообщение должно быть от 10 до 1000 знаков. 
После заполнения каждого из полей рядомс ним должна загораться галочка. 
При отправке формы выведите сообщение, если какие-то поля не заполнены, а также отмените отправку. */