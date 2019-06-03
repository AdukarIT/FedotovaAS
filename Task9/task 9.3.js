function getFactorial (num){
    if (num === 0) {
        result = 1;
    } else {
       for (; num > 0; num--) {
           result = num * getFactorial(num);
       }
    }
    displayFactorial(result);
}
function displayFactorial(num) {
    return console.log(num);
}