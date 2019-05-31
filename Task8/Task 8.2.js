var carModel = prompt('enter car brand','');
switch (carModel) {
	case 'Ford':
		console.log('Ford – страна происхождения США');
		break;
	case 'BMW':
		console.log('BMW – страна происхождения Германия');
		break;
	case 'Peugeot':
		console.log('Peugeot – страна происхождения Франция');
		break;
	case 'Lada':
		console.log('Lada – страна происхождения Россия');
		break;
	case 'Mitsubishi':
		console.log('Mitsubishi – страна происхождения Япония');
		break;
	case 'Porsche':
		console.log('Porsche – страна происхождения Германия');
		break;
	default:
		console.log(carModel + ' -  страна происхождения неизвестна');
} 