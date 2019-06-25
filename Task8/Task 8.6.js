//Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.
var presentValue1 = 0, presentValue2 = 1, previousValue, result; 
for (i = 0; i < 15; i++) { 
	previousValue = presentValue1 + presentValue2; 
	presentValue1 = presentValue2; 
	presentValue2 = previousValue; 
	console.log(previousValue); 
}
// хорошо
