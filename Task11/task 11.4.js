/*Выберите пингвина из списка вымышленных пингвинов на Википедии
 и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник).
 Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит 
 в консоль приветствие и представление вашего пингвина, и fly, 
 который в зависимости от значения свойства canFly (true или false) определяет,
 может ли пингвин летать, и сообщает об этом в консоль.*/
let penguin = {
    name: 'Gunter',
    source: 'Adventure Time',
	creator: 'Pendleton Ward'
};
penguin.canFly = false;
penguin.sayHello = function() {
	return 'Hello! I\'m ' + this.name;
}
penguin.fly = function() {
	if(this.canFly === true){
		return  this.name + 'can fly!';
	} else {
		return  this.name + 'сan\'t fly';
    }
}

