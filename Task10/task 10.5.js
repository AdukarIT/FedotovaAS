/*Отсортируйте массив методом пузырька. 
О самом алгоритме можно почитать на википедии. 
А ещё можно посмотреть, как его танцуют в Венгрии.*/

var arr = [1, 5, 2, 4, 3];
var count = arr.length-1;
for(var a = 0; a < count; a++) {
	for(var i = 0; i < count-a; i++) {
		if (arr[i]> arr[i+1]) {
			var max = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = max;
		 }
}
