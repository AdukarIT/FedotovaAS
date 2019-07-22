//1 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
document.querySelector("[type='button']").addEventListener('click', function(e) {
	document.body.insertBefore(document.querySelector("[type='text']").cloneNode(true), document.getElementsByTagName("br")[0]);
});
//2 Добавьте на страницу таблицу в стандартном оформлении. 
//При клике на таблице добавьте ей класс bordered, 
//при втором клике удалите класс bordered и добавьте класс striped, 
//при третьем клике удалите класс striped и добавьте класс highlight.
let table = document.getElementsByTagName('table')[0];
function countClick() {
	let count = 0;

	return function() {
			count++;

			if(count > 3) count = 1;
			if(count == 1) table.classList.add('border');
			else if(count == 2) table.className = 'striped';
			else if(count == 3) table.className = 'highlight'; 
		}
};

let counter = countClick();
table.addEventListener('click', function(e) {
		counter();
});
//3 Модифицируйте задачу 7. Добавьте три radiobutton. 
//При выборе первого включается класс bordered, 
//при выборе второго отключается bordered и включается striped, 
//при выборе третьего включается highlight и отключается striped.
let radio = document.getElementById('radio');

radio.addEventListener('click', function(e){
	if(e.target == radio.children[0]) {
		table.classList.add('border');
	}
	else if(e.target == radio.children[1]) {
		table.classList.remove('border');
		table.classList.add('striped');
	}
	else if(e.target == radio.children[2]) {
		table.classList.remove('striped');
		table.classList.add('highlight');
	}
});
//4 Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст.
// Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.
let button = document.body.appendChild(document.createElement('button'));
button.innerText = 'Alert!';
button.addEventListener('click', function(e){
	alert(this.innerText);
});

let buttonDisable = document.body.appendChild(document.createElement('button'));

buttonDisable.addEventListener('click', function(e){
	button.disabled = 'true';
});
//5 Создайте элементы div, p, button, a. 
//Используя target по клику выводите информацию о типе элемента по которому произошел клик.
let divTarget = document.getElementById('div_parents');
divTarget.addEventListener('click', function(e){
	alert(e.target.tagName);
});
//6 Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия:
// при наведении мыши на картинку, изображение будет заменяться другим изображением. 
//При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.
let img = document.getElementById('img');
let imgHidden = document.getElementById('img_hidden');

img.addEventListener('mouseover', function(e) {
	img.style.display = 'none';
	imgHidden.style.display = '';
})

img.addEventListener('mouseout', function(e) {
	img.style.display = '';
	imgHidden.style.display = 'none';
})
//7 Используя событие onclick реализовать аналог fancybox. 
//При клике – картинка увеличивается в размерах и всплывает над контентом. 
//Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.
let imgBig = document.getElementById('img_big');
imgBig.onclick = function() {
	document.body.style.background = '#696969';
	document.body.style.background = '#B6B6B7';
	for(let i = 0; i < document.body.childNodes.length; i++) {
		document.body.childNodes.style[i].opacyty = '0.1';
	}
	imgBig.style.position = 'absolute';
	imgBig.style.transform = 'scale(1.5)';
}