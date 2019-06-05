function reverseNum(num) {
    var remainder;
     if(num >= 10) {
         remainder = num % 10;
         num = (num - remainder) / 10;
         console.log(remainder);
         reverseNum(num);
     } else if (num < 10) {
         console.log(num);
     }
 }