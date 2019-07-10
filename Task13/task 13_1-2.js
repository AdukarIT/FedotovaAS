/*Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. 
Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики. */
function getSymbolInUnicode(numUnic, arr) {
	let str = arr.join('');
	let num = String.fromCharCode(numUnic);
	let numberOfCharacters = 0;
	for(i = 0; i < str.length; i++) {
		if(str[i] == num) numberOfCharacters++;
    	}
	return numberOfCharacters;
}
let arrSymbol = ['рапира', 'арбат' , 'привет' , 'ра', 'дом'];
getSymbolInUnicode(1088, arrSymbol); // 1088 - 'р'
/*Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1,
 фиксируя искомый символ. Например:
 let countOfD = letterCounter(100);	// 100 = 'd' в Unicode
console.log(countOfD(["dad", "rod", "doctor"])); // 4*/
function getSymbolInUnicode2(numUnic) {    
	let num = String.fromCharCode(numUnic);
	let numberOfCharacters = 0;
	function colculate(arr){
		let str = arr.join('');
		for(i = 0; i < str.length; i++) {
			if(str[i] == num) numberOfCharacters++;
		}
		return numberOfCharacters;
	}
	return colculate;
}
let count = getSymbolInUnicode2(1088);
count(['ра', 'а' , 'п' , 'р', 'д']);
