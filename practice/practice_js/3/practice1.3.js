/*Получите от пользователя три числа, создайте из них массив. 
Используя циклы, найдите наибольшее из чисел и разделите 
на него каждый элемент массива.
*/
function getNumber() {
	var number = prompt('insert the number', '');
	return number;
} 
function createAnArray() {
	var num1 = getNumber();
	var num2 = getNumber();
	var num3 = getNumber();
	var arr = [+num1, +num2, +num3];
	return arr;
}
function findGreatest(arr) {
	for(i = 0; i < arr.length; i++) {
		if (arr[i] >= arr[i++] && arr[i] >= arr[i--]) var max = arr[i];
		return max;
	}
}
function splitArr() {
	var arr = createAnArray();
	var max = findGreatest(arr);
	for(i = 0; i < arr.length; i++) {
		arr[i] /= max;
	}
	return arr;
}
var split = splitArr();