var num;
do {
	num = prompt('Enter the number','');
} while (isNaN(num) || num >= 20);
for (i = 1; i <= 10;i--) {
    var result = i * num;
    console.log(i + "*" + num + '=' + result)
}