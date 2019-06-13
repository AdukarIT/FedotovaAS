function getRandomArray(len) {
	let randomArray = [];
	for(i = 0; i < len; i++) {
		randomArray.push(Math.random());
	}
	return randomArray;
}
function findArithmeticAverage(len) {
    //let ArithmeticAverage = [];
    let randomArray = getRandomArray(len);
    let sum = 0;
    for(i = 0; i < randomArray.length; i++) {
        sum += randomArray[i]
    }
    sum /= randomArray.length;
    for(i = 0; i < randomArray.length; i++) {
		if(randomArray[i] > sum) console.log(randomArray[i]);
    }

}