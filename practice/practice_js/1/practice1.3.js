function getNumber() {
	var usersNumber = prompt('Inser the Number', 0);
	return +usersNumber;
}
function main() {
	var firstNumber = getNumber();
	var secondNumber = getNumber();
	var thirdNumber = getNumber();
	outputNumbers(firstNumber, secondNumber, thirdNumber);
}
function outputNumbers(first, second, third) {
	if (first >= second && second >= third) {
		console.log(third);
		console.log(second);
		console.log(first);
	} else if (first >= third && third >= second) {
		console.log(second);
		console	.log(third);
		console.log(first);
	} else if (second >= first && first >= third) {
		console.log(third);
		console.log(first);
		console.log(second);
	} else if (second >= third && third >= first){
		console.log(first);
		console.log(third);
		console.log(second);
	} else if (third >= first && first >= second) {
		console.log(second);
		console.log(first);
		console.log(third);
	} else if(third >= second && second >= first) {
		console.log(first);
		console.log(second);
		console.log(third);
	} 
}