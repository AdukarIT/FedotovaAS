/*Создайте объект "Цилиндр" (свойства – радиус и высота). 
Добавьте в него метод, который считает объём цилиндра (используя this).*/
let cylinder = {
    radius: 4,
    height: 10 
}
cylinder['volume'] = function() {
    let p = 3.1415;
    volume = this.radius ** 2 * this.height * p;
    return volume;
}
cylinder.volume();