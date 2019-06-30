function findRepetition(str) {
	let count2 = 0, arr = [];
	for(i = 0; i < str.length; i++) {
		let count = 0;
		for (j = 1; j < str.length; j++) {
			if(str[i] == str[j]) count += 1;
		}
		if(count > count2) {
				count2 = count;
				arr[0] = str[i];
		} else if (count == count2){
			arr.push(str[i]);
		}
	}
	let newArr = [];
	next:
	for(k = 0; k < arr.length; k++) {
		str = arr[k];
		for(l = 0; l < newArr.length; l++) {
			if(str == newArr[l]) continue next;
		}
		newArr.push(str);
	}
	return newArr.join(', ');
}
findRepetition("тркааакк");