let num = []; // cоздаем переменную с значениями от 1 до 35
for(i = 1; i <= 35; i++) {
	num.push(i);
}
let delNum = []; // удаляем первые 10 элементов
for(i = 0; i < 10; i++) {
	delNum[i] = num.shift();
}
for(i = 0; i < 10; i++) {  // добавляем их в конец
	num.push(delNum[i]);
}
//Разверните в обратном порядке элементы с 11 по 20
let delNum2 = num.slice(11, 21); //копируем с 11 по 20 элемент в новый массив
delNum2.reverse(); //разворачиваем его
//заменяем с 11 элемениа по 20 элементами нового массива
for(i = 11; i < 21; i++) {
	var a = num.splice(i, 1, delNum2.shift());
}
//Удалите элементы с 21 по 25, на их место вставьте пять первых степеней двойки. 
var degreesTwo;
for(i = 0; i < 5; i++) {
	num.fill(2 ** i, 21 + i, 22 + i);
}
//Элементы с 26 по 30 замените на единицы.
for(i = 0; i < 5; i++) {
	num.fill(1, 26 + i, 27 + i);
}