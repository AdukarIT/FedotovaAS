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
	if (arr[0] > arr[1] && arr[0] > arr[2]) {
		return arr[0];
	} else if(arr[2] > arr[0] && arr[2] > arr[1]) {
		return arr[2];
	} else {
		return arr[1];
	}
}
function splitArr() {
	var arr = createAnArray();
	var max = findGreatest(arr);
	arr[0] /= max;
	arr[1] /= max;
	arr[2] /= max;
	return arr;
}
var split = splitArr();