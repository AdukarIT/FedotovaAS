/*
1 Создайте массив и в цикле заполните его чётными числами от 2 до 20.
2 Преобразуйте массив из задачи 1 так, чтобы его элементы стали равны своему индексу, умноженному на 5.
3 Преобразуйте массив из задачи 2 так, чтобы его элементы расположились в обратном порядке.
*/

var evenNumbers = [];
for(i = 1; i <= 20; i++) {
	if(i % 2 == 0) {
		evenNumbers.push(i);
		console.log(evenNumbers);
	}
}
var byFive = [];
for(i = 0; i < evenNumbers.length; i++) {
	byFive.push(i * 5);
	console.log(byFive);
}
var byFiveRevers = []
for (i = 0; i < byFive.length; i++) {
    byFiveRevers[i] = byFive.pop();
}
// хорошо
