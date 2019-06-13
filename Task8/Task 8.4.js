/*
Пользователь вводит число от 1 до 20. 
Выведите в консоль таблицу умножения этого числа. 
Например, для числа 7: 7x1=7 7x2=14 ... 7x10=70
*/
var num;
do {
	num = prompt('Enter the number','');
} while (isNaN(num) || num >= 20);
for (i = 10; i >= 0;i--) {
    var result = i * num;
    console.log(i + "*" + num + '=' + result)
}