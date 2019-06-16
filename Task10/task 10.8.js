/*Создайте массив той же длины, что исходный. 
На месте самого большого числа исходного массива 
в новом вставьте число 1, на месте второго 
по величине – 2 и так далее.*/

function getRandomArray(len) {
	let randomArray = [];
	for(i = 0; i < len; i++) {
		randomArray.push(Math.random());
	}
	return randomArray;
}
function sumItemsArrays() {
  var randomArr = getRandomArray(10);
  var newArr = [];
  for(i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
  }
  return newArr;
}