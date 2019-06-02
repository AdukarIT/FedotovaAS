function getNumber() {
	var numberUser = prompt('Enter the number', '');
	return numberUser;
}

function main () {
	var outputNumber = getNumber();
	outputNumbers(parseInt(outputNumber));
}

function outputNumbers(someNumber) {
	while (someNumber >= 0) {
		if (someNumber % 2 != 0) {
			someNumber--;
			continue;
		} else {
			console.log(someNumber);
		}
		someNumber--;
	}
}