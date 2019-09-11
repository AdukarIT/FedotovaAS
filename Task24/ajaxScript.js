/* На странице есть изначально пустое поле для выбора (select) и кнопка “Получить досье”.
При загрузке страницы при помощи GET-запроса (https://jsonplaceholder.typicode.com/users) 
получите данные о пользователях. Элемент select заполните именами пользователей. По нажатию на кнопку “Получить досье” 
выведите ниже всю доступную информацию о выбранном в данный момент пользователе.
*/
$.ajax('https://jsonplaceholder.typicode.com/users', {
	method: 'GET',
	dataType: 'json',

	success: function(users) {
		new Users(users);
	}
})

	сlass Users = {
		constructor(users) {
			this.select__users = '.users__name';
			
			this.users = users;
		}
		
		getOptions() {
			users.forEach(function(user) {
				$('#users_name').append(new Option(user.name, user.id));
			})
		}
		
		
		$('#getter_dossier').click(function() {
			$('.dossier').empty();

			users.forEach(function(user) {
				if(user.id == users_name.value) {
					$('.dossier').append(`<p>${JSON.stringify(user)}</p>`);
				}
			})
			
			
			
		})
	} 

/* Есть базы:  
альбомов https://jsonplaceholder.typicode.com/albums 
фотографий https://jsonplaceholder.typicode.com/photos 

На одной странице реализуйте возможность просмотреть любой из 100 альбомов.
Фотографии альбома должны загружаться только после выбора соответствующего альбома.
P.S. Отфильтровать фотографии по принадлежности к альбому можно добавив параметр albumId=идентификатор_альбома
*/ 