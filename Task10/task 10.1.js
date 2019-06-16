/*Используя встроенную функцию Math.random(), 
напишите собственную функцию getRandomArray(len), 
которая возвращает массив случайных чисел длиной len.*/
function getRandomArray(len) {
	let randomArray = [];
	for(i = 0; i < len; i++) {
		randomArray.push(Math.random());
	}
	return randomArray;
}