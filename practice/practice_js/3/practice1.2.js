var evenNumbers = [];
for(i = 1; i <= 20; i++) {
	if(i % 2 == 0) {
		evenNumbers.push(i * 5);
		console.log(evenNumbers);
	}
}

var byFive = [];
for(i = 0; i < evenNumbers.length; i++) {
	byFive.push(i * 5);
	console.log(byFive);
}
