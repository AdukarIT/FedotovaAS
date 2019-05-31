var num;
do {
	num = prompt('Enter apartment number','');
} while (isNaN(num) || +num <= 0 || +num > 100);
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
