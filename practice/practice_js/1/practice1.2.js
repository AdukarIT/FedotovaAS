var firstNumber = prompt('YOUR NUMBER!', 0);
var secondNumber = prompt('YOUR NUMBER AGAIN!', 0);
var result = firstNumber > secondNumber;
if(result) {
	console.log(firstNumber);
}
else if(!result) {
	console.log(secondNumber);
}
else {
	console.log('Something went wrong!')
}