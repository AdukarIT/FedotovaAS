function getNumber() {
	var numberUser = prompt('Enter the number', '');
	return numberUser;
}
function main () {
	var outputNumber = getNumber();
	outputNumbers(+outputNumber);
}
function outputNumbers(someNumber) {
	for(; someNumber > 0; someNumber--) {
		if (someNumber % 2 != 0) {
			continue;
		} else	{
			console.log(someNumber);
		} 
	}
}