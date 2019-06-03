function outputMostNumber(num) {
	return console.log(num);
}
function defineMostNumber (num1, num2, num3) {
	if (num1 >= num2 && num1 >= num3) {
		outputMostNumber(num1);
	} else if (num2 >= num1 && num2 >= num3) {
		outputMostNumber(num2);
	} else {
		outputMostNumber(num3);
	}
}