//реобразуйте массив из задачи 1 так, чтобы его 
//элементы стали равны своему индексу, умноженному на 5.
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
// хорошо
