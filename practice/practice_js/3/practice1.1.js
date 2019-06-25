//Создайте массив и в цикле заполните его 
//чётными числами от 2 до 20.
var evenNumbers = [];
for(i = 1; i <= 20; i++) {
	if(i % 2 == 0) {
		evenNumbers.push(i);
		console.log(evenNumbers);
	}
}
// хорошо
