function getApartmentNumber() {
	var num = prompt('Enter apartment number','');
	if (isNaN(num)) {
		alert('You entered not a number')
		getApartmentNumber();
	} else if (num > 100) {
		alert('Apartment number can not be more than 100!');
		getApartmentNumber();
	} else if (num <= 0) {
		alert('Apartment number can not be less than 1!');
		getApartmentNumber();
	} else {
		return +num;
	}
}
function givePorchNumber() {
	var num = getApartmentNumber();
	if (num <=20) {
		console.log('first');
	} else if (num <= 40) {
		console.log('second');
	} else if (num <= 60) {
		console.log('third')
	} else if (num <= 80) {
		console.log('fourth')
	} else {
		console.log('fifth');
	}
}