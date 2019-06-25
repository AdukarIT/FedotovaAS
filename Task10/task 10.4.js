/*Удалите из массива все элементы, меньшие 0.3. 
Сдвиньте все оставшиеся элементы вперёд, 
а на освободившиеся места вставьте нули.*/

function getRandomArray(len) {
	let randomArray = [];
	for(i = 0; i < len; i++) {
		randomArray.push(Math.random());
	}
	return randomArray;
}
function findLess(num) {
  let randomArray = getRandomArray(15);
  for(i = 0; i < randomArray.length; i++) {
    if(randomArray[i] < num) {
      randomArray[i] = null; // логика с нал излишняя
    }
  }
  return randomArray;
}
function newArr() {
  var oldArr = findLess(0.3);
  var newArr = [];
  for(i = 0; i < oldArr.length; i++) {
    if(oldArr[i] != null) {
      newArr.push(oldArr[i]);
    }
  }
  var countDeletedItems = oldArr.length - newArr.length;
  for(i = 0; i < countDeletedItems; i++) {
    newArr.unshift(0);
  }
  return newArr;
}
