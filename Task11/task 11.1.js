/*Напишите функцию, которая получает в качестве аргументов
 объект и строку и проверяет, есть ли в этом объекте 
 свойство с именем, равным этой строке.*/
function checkPropertyAtObject(object, property) {
	for(let key in object) {
		if(key === property){
			return 'a property with that name is in the object';
		}
	}
	return 'property with that name is not in object';
}
// хорошо
