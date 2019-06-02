var num;
do {
	num = prompt('Enter the number','');
} while (isNaN(num) || num >= 20);
for (i = 10; i >= 0;i--) {
    var result = i * num;
    console.log(i + "*" + num + '=' + result)
}