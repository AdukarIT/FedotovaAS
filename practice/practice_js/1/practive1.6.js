function getNumber() {
	var numberUser = prompt('Enter the number', '');
	return numberUser;
}
function getResultInConsol() {
	var outputPrimeNumber = getNumber();
	outputNumbers(+outputPrimeNumber);
}
function outputNumbers(Numbers) {
	for(var i = 2; i <= Numbers; Numbers--) {
		if (Numbers % 2 === 0 || Numbers % 3 === 0 || Number % 5 === 0) {
			continue;
		} else {
			console.log(Numbers);
		}
	}
	console.log(3);
	console.log(2);
}