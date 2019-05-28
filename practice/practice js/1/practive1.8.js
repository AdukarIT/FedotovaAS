function getNumber() {
	var numberUser = prompt('Enter the number', '');
	return numberUser;
}
function main () {
	var outputNumber = getNumber();
	outputNumbers(+outputNumber);
}
function outputNumbers(someNumber) {
	while (someNumber > 0) {
		console.log (someNumber);
		someNumber--;
	}
}