function reverseNum(num) {
    var remainder;
     if(num >= 10) {
         remainder = num % 10;
         num = (num - remainder) / 10;
         var revers = reverseNum(num);
         return String(remainder) + revers;
     } else if (num < 10) {
         return num ;
     }
 }
 //8738
 //8
 //873