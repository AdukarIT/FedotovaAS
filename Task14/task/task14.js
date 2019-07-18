//1 Дан элемент #elem. Добавьте ему класс "www".
let elem = document.getElementById('elem');
elem.classList.add('www');
//2 Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс
if(elem.classList.contains('www')) elem.classList.removeClass('www');
//3 Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
//а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body
function recursiveSearchTags(document, tag) {
	let arr = [];
	if(document.children.length >= 0){
		recursiveSearchTags(document.children[document.children.length - 1], tag) 
		if()return arr.push();
	}
	return arr;
}
recursiveSearchTags(document, div);
//4 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
//Сделайте так, чтобы четные позиции имели красный фон.
let ul = document.getElementsByTagName('ul')[0];
let arr = ['Пришел слон', 'Пришла слониха', 'Пришел', 'маленький', 'слоненок'];
function getArrLi(arr, ul){
	for(i = 0; i < arr.length; i++) {
		if(i % 2 != 0) ul.appendChild(document.createElement('li'));
		else {
			ul.appendChild(document.createElement('li'));
			ul.children[i].style.backgroundColor = 'red'
		}
		li[i].innerHTML = arr[i];
	}
	
	return document.getElementsByTagName('li');
}
getArrLi(arr, ul);
//5 Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'
let textNeigbor = document.getElementById('elem').previousElementSibling.appendChild(document.createTextNode('!'));
//6Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) 
//внутри элемента div и оборачивает текст в параграф
function wrapInParagp() {
	let divs = document.getElementsByTagName('div');
	
	for(i = 0; i < divs.length; i++) {
		for(j = 0; j < divs[i].childNodes.length; j++) {
			if(divs[i].childNodes[j].nodeType != 3) continue;
			divs[i].childNodes[j].data  =  0;
		}
	}
	
	return divs;
}
wrapInParagp();
//7 Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице. 
//В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию 
//в camelCase нотацию: text-center => textCenter