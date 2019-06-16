/*Попарно сложите элементы двух массивов равной длины: 
первый массива 1 с последним массива 2, 
второй массива 1 с предпоследним массива 2 и так далее. 
Верните массив с результатами сложения.*/

function getRandomArray(len) {
	let randomArray = [];
	for(i = 0; i < len; i++) {
		randomArray.push(Math.random());
	}
	return randomArray;
}
function sumItemsArrays() {
  var arr1 = getRandomArray(10);
  var arr2 = getRandomArray(10);
  var newArr = [];
  arr2 = arr2.reverse();
  for(i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
  }
  return newArr;
}