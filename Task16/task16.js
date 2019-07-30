/*Дана форма, напишите проверку: на правильность заполнения двух текстовых полей: 
имя (id="name") и минут (id="minutes"). Используйте проверку на оставление поля пустым ("") 
и правильного формата. заполнения числового поля (isNaN).
*<form>Имя: <input type="text" id="name"><br>Кол-во пончиков: <input type="text" id="donuts"><br>Минут: 
<input type="text" id="minutes"><br>Подитог: <input type="text" id="poditog"><br>Налог: 
<input type="text" id="tax"><br>
Итог:<input type="text" id="itog"><br><input type="submit" value="заказать" 
onclick="placeOrder();"></form>
*/
let form = document.forms.form;
let name = document.getElementById('name');
let min = document.getElementById('minutes');
let donuts = document.getElementById('donuts');
let sub = document.querySelector('[type="submit"]');
let tax = document.getElementById('tax');


let checkForm = function(evn) {
	for(let i = 0; i < form.elements.length; i++) {
		if(!form.elements[i].value) {
			alert('Fill in all the fields');
			evn.preventDefault();
			break;
		}   
	}

	if(isNaN(min.value) || isNaN(donuts.value) || isNaN(min.value) || isNaN(tax.value)) {
		alert('Invalid values');
		evn.preventDefault();
	}

	if(name.value.search(/[0-9]/) != -1) {
		alert('The entered name is incorrect');
		evn.preventDefault();
	}
}

sub.addEventListener('click', function(e) {
	checkForm(e);
});

/*Создать страницу с текстовым полем и двумя кнопками.
 При нажатии одной из них происходит передача данных содержимого текстового поля 
 по электронной почте (action="mailto:address@domen.domen"), 
 при нажатии другой – происходит очистка текстового поля.*/

let mailForm = document.forms.mailForm;
let text = document.getElementById('sms');
let enter = document.getElementById('smsEnter');
let reset = document.getElementById('reset');

enter.addEventListener('click', function() {
		form.setAttribute('action', 'mailto:address@domen.domen');
		form.submit();
	}
);

reset.addEventListener('click', function() {
		text.value = '';
	}
);



/*Напишите универсальную функцию для прохождения по полям формы 
с возможностью проверки введенных данных, для тектовых полей - на текст, для имейла - на имейл и тд.*/

function testForm(form) {
	let elem = form.elements;
	let arrNotValid = [];

	for(i = 0; i < elem.length; i++) {
		if(!elem[i].value) {
			arrNotValid.push(form.elements[i]);
		}
		
		if(elem[i].type == 'text' && elem[i].value.search(/[0-9]/) != -1) {
			arrNotValid.push(form.elements[i]);
		}
		
		if(elem[i].type == 'mail' && !/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(elem[i].value)) {
			arrNotValid.push(form.elements[i]);
		}
		
		if(elem[i].type == 'number' && elem[i].value.search(/[a-z]/) != -1) {
			arrNotValid.push(form.elements[i]);
		}
		
		if(elem[i].type == 'date' && !/^\d{2}\.\d{2}\.\d{4}$/.test(elem[i].value)) {
			arrNotValid.push(form.elements[i]);
		}
	}
	
	return arrNotValid;
		
}

/*Поверьте написанную ранее функция на обработку форы регистрации, 
если поле не проходит валидацию - подсветите его, если все поля валидные - выведите приветственное сообщение.*/

let registr = document.forms.registration;
let butnRegister = registr.elements.register;
let user = registr.elements.userName;

butnRegister.addEventListener('click', function(e) {
		let arrNotValid = testForm(registr);

		if(arrNotValid.length == 0) {
			alert('Hello ' + user.value);
			return true;
		} else {
			for(i = 0; i < arrNotValid.length; i++) {
				arrNotValid[i].style.backgroundColor = 'red';
			}
		}
	}
);

/*Написать скрипт, которые заменяет слово «функция» в тексте на «фунция», используя регулярные вырожения.*/
let str = 'Убрать функция. вапвапав пФункция. прв пк впквпвкпкв  ФУНКЦИЯ функция функция прфункция';
str.replace(/функция/gi, 'фунция');

/*С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.*/
let regTime = /\d{1,2}\.\d{2} [ap]m/;
regTime.test('1.33 am');
regTime.test('11.27 pm');

/*Удалите одной регуляркой все повторяющиеся слова из строки,
например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.*/
