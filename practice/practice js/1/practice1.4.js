function getSinq() {
	var firstNumber = prompt('YOUR NUMBER!', 0);
	var secondNumber = prompt('YOUR NUMBER AGAIN!', 0);
	var result = firstNumber * secondNumber;
	var report = (result > 0) ? '+' : (result < 0) ? '-' : '0';
	console.log(report);
}