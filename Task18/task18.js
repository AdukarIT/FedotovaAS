//практика

/*Создайте html файл и наполните его произвольными данными. Напишите функцию получения
этого файла используя синхронный/асинхронный подходы. Напишите обработчики события 
на каждый тип события. Посмотрите в отладчике, 
что происходит на каждом шагу выполнения запроса.*/

/*Превратите простой объект в JSON*/
let obj = {
	name: Nastya,
	number: '123 45 67'
}
let objJson = JSON.stringify(obj);

/*Создайте объект со ссылкой на другой объект и сконвертируйте его в JSON. А потом назад*/
let objInObj = {
	user: obj,
	date: '2019'
}

let objInObjJson = JSON.stringify(objInObj);
JSON.parse(objInObjJson);

/*Используя ссылку 
“https://api.instagram.com/v1/users/2093101329/media/recent/?access_token=2093101329.0e4abd3.d017a21b3e6e45408126e42cf0940d79” получите данные, найдите изображения и вставьте их 
в документ, также оберните их в ссылки, используя свойства link.*/

let xhr1 = new XMLHttpRequest;
xhr1.open('GET', 'https://api.instagram.com/v1/users/2093101329/media/recent/?access_token=2093101329.0e4abd3.d017a21b3e6e45408126e42cf0940d79', false)
xhr1.responseType = 'json';
xhr.send();

let response = JSON.parse(xhr1.response);

function getIMG(arr) {
	
}

let arrImg = getIMG(response);