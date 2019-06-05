function getFactorial(num) {
	var result;
    if (num > 0) {
		result = num * getFactorial(num - 1);
		
    } else if (num == 0) {
       result = 1;
    }
	return result;
}