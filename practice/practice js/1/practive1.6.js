function getNumber() {
	var numberUser = prompt('Enter the number', '');
	return numberUser;
}
function getResultInConsol() {
	var outputPrimeNumber = getNumber();
	outputNumbers(+outputPrimeNumber);
}
function outputNumbers(Numbers) {
	for(var i = 2; i <= Numbers; i++) {
		console.log(i++); 
	}
}