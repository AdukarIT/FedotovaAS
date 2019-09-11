/* На странице есть изначально пустое поле для выбора (select) и кнопка “Получить досье”.
При загрузке страницы при помощи GET-запроса (https://jsonplaceholder.typicode.com/users) 
получите данные о пользователях. Элемент select заполните именами пользователей. По нажатию на кнопку “Получить досье” 
выведите ниже всю доступную информацию о выбранном в данный момент пользователе.
*/
$.ajax('https://jsonplaceholder.typicode.com/users', {
	method: 'GET',
	dataType: 'json',

	success: function(users) {
		users.forEach(function(user) {
			$('#users_name').append(new Option(user.name, user.id));
		})
		
		$('#getter_dossier').click(function() {
			$('.dossier').empty();

			users.forEach(function(user) {
				if(user.id == users_name.value) {
					$('.dossier').append(`<p>${JSON.stringify(user)}</p>`);
				}
			})
			
		})
	}
})