/*1 Реализуйте класс Student (Студент), который будет наследовать от класса User. 
Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
surname (фамилия, наследуется от User), year (год поступления в вуз). 
Класс должен иметь метод getFullName() (наследуется от User), 
с помощью которого можно вывести одновременно имя и фамилию студента. 
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента 
(от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
Текущий год получите самостоятельно.
  function User(name, surname) {
    this.name = name;
    this.surname = surname;

    getFullName() {
      return this.name + ' ' + this.surname;
    }
  }*/
function User(name, surname) {
	this.name = name;
	this.surname = surname;

	this.getFullName = function() {
		return this.name + ' ' + this.surname;
	}
};

function Student(name, surname, year) {
	User.call(this, name, surname);
	
	let nowYear = new Date().getFullYear();
	this.getCourse = function() {
		if(year > nowYear && year < nowYear - 4) return false;
		return nowYear - year + 1;
	}
}

let petrovP = new Student('petr', 'petrov', 2017);
/*Напишите программу, расчиытвающую стоимость и калорийность гамбургеров 
(чисбургер, бигмак и тд), используя ООП подход.*/
let Product = function(name, kkal, price) {
	this.name = name;
	this.price = price;
	this.kkal = kkal;
}

let roll = new Product('roll', 800, 0.70);
let cutlet = new Product('cutlet', 1000, 1);
let sauce = new Product('sauce', 100, 0.50);
let cheese = new Product('cheese', 150, 1);
let tomato = new Product('tomato', 100, 0.30);
let bow = new Product('bow', 50, 0.50);
let cucumber = new Product('cucumber', 50, 0.50);
 
let Burger = function(name, arrProducts) {
	this.name = name;
	let products = arrProducts;

	this.calculatePrise = function() {
		let rub = 0;

		for(let i = 0; i < products.length; i++) {
			rub += products[i].price;
		}

		return rub;
	}
	this.calculateKkal = function() {
		let kk = 0

		for(let i = 0; i < products.length; i++) {
			kk += products[i].kkal;
		}

		return kk;
	}
}

let hamburger = new Burger('hamburger', [roll, cutlet, sauce, cucumber]);	
/*Реализуйте на ООП программу-напоминалку. 
Как она должна работать: вы записываете в специальное поле какие-то события, 
о которых вам нужно напомнить и в нужное время вкладка браузера 
с этой программой должна напомнить об этом событии звуком (погуглите работу с аудио на js).*/

let Events = function(text, hour, min) {
	this.text = text;
	this.hour = hour;
	this.min = min;
}

let arrEvent = [];
let butRemind = document.getElementById('enterEvent');

function verifyTime(hour, min) {
	
	while (hour.value < 0 && hour.value > 23 && min.value < 0 && min.value > 59 && !isNaN(hour.value) && !isNaN(min.value){
		alert('Ошибка');
		
	}
	return;
}

butRemind.addEventListener('click', function() {
	verifyTime(document.getElementById('hourEvent'), document.getElementById('minEvent'));
	
	arrEvent.push(new Events(document.getElementById('textEvent').value, document.getElementById('hourEvent').value),  document.getElementById('minEvent').value));
	
	alert('OK');
	document.getElementById('textEvent').value = '';
	document.getElementById('timeEvent').value = '';
});

let Notification = function(arrEvent) {
	sound();
}
function sound() {
	 var audio = new Audio();
	 audio.src = 'audio.mp3';
	 audio.autoplay = true;
}