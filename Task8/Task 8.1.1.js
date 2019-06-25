/*В доме 5 подъездов по 20 квартир каждый. П
олучите от пользователя номер квартиры и взамен выдайте в консоль номер подъезда. 
Учитывайте, что пользователь может ввести число меньше 1 или больше 100.
*/
var num;
do {
	num = prompt('Enter apartment number','');
} while (isNaN(num) || num <= 0 || num > 100);
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
// хорошо, но лучше через математику
