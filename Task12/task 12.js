/*Напишите функцию, которая принимает массив случайных чисел 
(см. задачу 2 в практике) и создаёт на его основе новый. 
Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}.
 initial – значение элемента исходного массива с тем же индексом, 
 sqrt – корень квадратный из этого значения. 
 Если округление sqrt по обычным математическим правилам сходится с его округлением через 
 floor, то floor = true, а ceil = false. 
 Если сходится с округлением через ceil - наоборот. 
 Например, пусть у исходного массива arr[0] = 19, 
 тогда в новом массиве newArr[0] = {initial: 19, 
 sqrt: 4.358898943540674, floor: true, ceil: false}.*/
 function randomArr(len, min, max) {
	let oldArr = [];
	
	for(i = 0; i < len; i++) {
		oldArr[i] = Math.random() * (max - min) + min;
	}

	return oldArr;
}
function getNewArr() {
	let oldArr = randomArr(5, 1, 30);
	let newArr = [];

	for(i = 0; i < oldArr.length; i++) {
		let obj = {}; 
		obj['initial'] = oldArr[i];
		obj['sqrt'] = Math.sqrt(obj.initial);
		if(Math.round(obj.sqrt) == Math.floor(obj.sqrt)) {
			obj['floor'] = true;
			obj['ceil'] = false;
		} else {
			obj['floor'] = false;
			obj['ceil'] = true;
		}
		newArr[i] = obj;
	}

	console.log(oldArr);
	return newArr;
}
getNewArr();
//2 Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, округлённое до сотых.
function getSqrtRoundedToOneHundred() {
	let newArr = getNewArr();

	for(i = 0; i < newArr.length; i++) {
		let sqrt = newArr[i]['sqrt'];
		newArr[i]['sqrtRoundedToOneHundred'] = +(sqrt.toFixed(2));
	}

	return newArr;
}
getSqrtRoundedToOneHundred();
//3 Напишите функцию, которая определяет, является ли строка палиндромом.
function calculatePalindrome(str) {
	let count = str.length / 2;

	for(i = 0; i < count.toFixed(); i++) {
		if(str[i] != str[str.length - i- 1]) {
			return false;
		} 
	} return true;
}
calculatePalindrome('абрвба')
calculatePalindrome('абвба')
//4 Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. 
//Если таких символов несколько, функция должна возвращать строку из этих символов.
function findRepetition(str) {
	let arr = [], count2 = 1;

	for(i = 0; i < str.length; i++) {
		let count = 0;
		for(j = i + 1; j < str.length; j++) {
			if(str[i] == str[j]) count += 1;
		}
		if(count > count2) {
			arr = [];
			count2 = count;
			arr.push(str[i]);
		} else if (count == count2) {
			arr.push(str[i]);
		}
	}

	return arr.join(", ");
}
findRepetition("трркааакк");
//5 Напишите функцию, которая получает в аргументы три строки – str, search, replace. 
//Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.
function findSearchInStrAndReplase(str, search, replace) {
	let strNew = str.toLowerCase();
	let searchNew = search.toLowerCase();
	let replaceNew = replace.toLowerCase();
	let position = 0;
	let count = 0;
	let result = '';

	while (true) {
		let foundPosition = strNew.indexOf(searchNew, position);
		if(foundPosition == -1) break;
		position = foundPosition + 1;
		count += 1;
		result = strNew.replace(searchNew, replaceNew);
		strNew = result;
	}

	console.log("substring occurs: " + count);
	return result;
}
findSearchInStrAndReplase('Карл у клара украл кораллы', 'ар', '1');
findSearchInStrAndReplase('Мама мыла Мамы окно', 'ма', '2');
//6 Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.
function replaceTheFirstLetter(str) {
	let position = 0;
	let result = str.split('');

	while(true) {
		result[position] = str[position].toUpperCase();
		let foundPosition = str.indexOf(' ', position);
		if (foundPosition == -1) break;
		position = foundPosition + 1;
	}

	return result.join('');
}
replaceTheFirstLetter('заменить первую букву каждого слова');
//7 Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. 
//Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".
function replaceReps(str) {
	let result = str.split('');

	for(i = 0; i < str.length; i++) {
		for(j = i + 1; j < str.length; j++) {
			if(result[i] == result[j] && result[i] != " ") result[j] = '*';
		}
	}

	return result.join('');
}
replaceReps('мама мыла грушу');
//8 Напишите функцию, которая возвращает текущий день недели на русском языке.
let date = new Date();
function getDayInRussian(date) {
	let day = date.getDay();
	let arr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

	return arr[day];
}
getDayInRussian(date);
// 9 Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, и
//спользуя функцию из задачи 8, выдаёт в консоль день недели для этой даты.
function getDayInRussian2() {
	let dateUser = prompt('Enter the DATE', 'ДД-ММ-ГГГГ');
	dateUser = dateUser.split('-').reverse().join('-');
	console.log(getDayInRussian(new Date(dateUser)));
}
getDayInRussian2();