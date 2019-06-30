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
function reversString(str) {
		let strRevers = '';
		for(i = 1; i <= str.length; i++) {
			strRevers += str[str.length - i];
		}
		return strRevers;
}
function calculatePalindrome() {
	let str = prompt('enter the string', '');
	let strRevers = reversString(str);
	if(str === strRevers) {
		return 'This String is Palendrome';
	} return 'This String isn\'t palendrome';
}
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
//Напишите функцию, которая получает в аргументы три строки – str, search, replace. 
//Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.
function findSearchInStrAndReplase(str, search, replace) {
	let strNew = str.toLowerCase();
	let searchNew = search.toLowerCase();
	let replaceNew = replace.toLowerCase();
	let position = 0;
	let count = 0;
	let result = '';
	while (position < strNew.length) {
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
//

