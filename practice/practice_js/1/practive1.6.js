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
		if (Numbers % 2 === 0 || Numbers % 3 === 0 || Numbers % 5 === 0 || Numbers % 7 === 0) {
			continue;
		} else {
			console.log(Numbers);
		}
	}
	console.log(7);
	console.log(5);
	console.log(3);
	console.log(2);
}
// выглядит нормально, но я не понимаю что это должно делать
