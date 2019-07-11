/*Напишитео/*Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. 
Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики. */
function countСharacters(numUnic, arr) {
	let str = arr.join('');
	let symbol = String.fromCharCode(numUnic);
	let count = 0;
	for(i = 0; i < str.length; i++) {
		if(str[i] == symbol) count++;
    	}
	return count;
}
let arrSymbol = ['рапира', 'арбат' , 'привет' , 'ра', 'дом'];
getSymbolInUnicode(1088, arrSymbol); // 1088 - 'р'
/*Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1,
 фиксируя искомый символ. Например:
 let countOfD = letterCounter(100);	// 100 = 'd' в Unicode
console.log(countOfD(["dad", "rod", "doctor"])); // 4*/
function countСharacters2(numUnic) {    
	let symbol = String.fromCharCode(numUnic);
	let count = 0;
	function colculate(arr){
		let str = arr.join('');
		for(i = 0; i < str.length; i++) {
			if(str[i] == symbol) count++;
		}
		return count;
	}
	return colculate;
}
let countSymbol = countСharacters2(1088);
countSymbol(['ра', 'а' , 'п' , 'р', 'д']);
