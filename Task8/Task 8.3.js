var year;
do {
	year = prompt('Enter year','');
} while (isNaN(year) || year <= 0);
if (year % 4 === 0) {
	alert("a leap year");
} else {
	alert("not a leap year");
}