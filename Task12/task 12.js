//1
function randomArr(len, min, max) {
	let oldArr = [];
	for(i = 0; i < len; i++) {
		oldArr[i] = Math.random() * (max - min) + min;
	}
	return oldArr;
}
function getNewArr() {
	let oldArr = randomArr(5, 1, 30);
	let obj = {}, newArr = [];
	for(i = 0; i < randomArr.length; i++) {
		obj['initial'] = oldArr[i];
		obj['sqrt'] = Math.sqrt(obj.initial);
		if(Math.round(obj.sqrt) == Math.floor(obj.sqrt)) {
			obj['floor'] = true;
			obj['ceil'] = false;
		} else {
			obj['floor'] = false;
			obj['ceil'] = true;
		}
		newArr[i] = obj;
	}
	console.log(oldArr);
	console.log(obj);
	return newArr;
}
//2
