/* Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния,
 которые с 2000 по 2013 выросли в населении.*/
 let filterCitiesOfCalifornia = function(elem) {
    if(elem['state'] != "California") return false;
   
    return (parseInt(elem.growth_from_2000_to_2013) > 0); 
 };
 
let populationGrowth = data.filter(filterCitiesOfCalifornia);
populationGrowth;
/* Подсчитайте, сколько миллионов 
населения живёт во всех городах на широте от 25 до 30 градусов.*/
let filterByLatitude = function(elem) {
    let city = parseInt(elem.latitude);
 
	return (city > 25 && city < 30); 
 };
 
let citiesLatitudeFrom25To30 = data.filter(filterByLatitude);
let sumPeople = citiesLatitudeFrom25To30.reduce(function(sum, elem) {
    return sum + +(elem.population);
}, 0);
sumPeople;
/* Создайте массив только из тех городов, которые начинаются на букву D, 
при этом отсортируйте элементы этого массива по названию города.*/
let citiesD = data.filter(function(elem) {
	return (elem['city'] == 'D'); 
 }
);

let sortedCitiesD = citiesD.sort(function(elem1, elem2){
    if(elem1['city'] > elem2['city']) return 1;
    else if(elem1['city'] < elem2['city']) return -1;
    
	return 0;
	}
);
sortedCitiesD;
/*Преобразуйте представленный массив "Города" в объект "Штаты":
для каждого штата – отдельное свойство объекта (ключ = название штата);
значение каждого свойства – массив городов;
каждый элемент массива – название города, население и место в общем рейтинге (rank).*/