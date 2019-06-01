var firstNumber = prompt('YOUR NUMBER!', 0);
var secondNumber = prompt('YOUR NUMBER AGAIN!', 0);
var result = firstNumber * secondNumber;
if(result > 0) {
	console.log('+');
}
else if(result < 0) {
	console.log('-');
}
else {
	console.log('0')
}