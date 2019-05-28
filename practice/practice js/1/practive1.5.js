function getNumber() {
	var numberUser = prompt('Enter the number', '');
	return numberUser;
}
function main () {
	var outputNumber = getNumber();
	outputNumbers(+outputNumber);
}
function outputNumbers(Numbers) {
	switch (Numbers) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			console.log('Hello'); 
				break;
		default:
			console.log('Bye');
	}
}