//1
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
	for(i = 0; i < str.length; i++) {
		for(i = 0; i < str.length; i++)  {
			if(str[i] =
		}
	}
}