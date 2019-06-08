function reverseNum(num) {
    var remainder;
     if(num >= 10) {
         remainder = num % 10;
         num = (num - remainder) / 10;
         var a = reverseNum(num);
         return String(remainder) + a;
     } else if (num < 10) {
         return num ;
     }
 }