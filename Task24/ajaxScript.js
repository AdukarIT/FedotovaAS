/* На странице есть изначально пустое поле для выбора (select) и кнопка “Получить досье”.
При загрузке страницы при помощи GET-запроса (https://jsonplaceholder.typicode.com/users) 
получите данные о пользователях. Элемент select заполните именами пользователей. По нажатию на кнопку “Получить досье” 
выведите ниже всю доступную информацию о выбранном в данный момент пользователе.
*/

/*
$.ajax('https://jsonplaceholder.typicode.com/users', {
	method: 'GET',
	dataType: 'json',

	success: function(users) {
		new Users(users, $('#usersInfo'))
		
		
		/*users.forEach(function(user) {
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
*/

/*
class Users {
	constructor(users, form) {
		this.select__users = '.users__name';
		this.burron_users = '.users__getter';
		this.div_dossier = '.users__dossier';
		
		this.users = users;
		this.form = form;

		this.$select = this.form.find(this.select__users);
		this.$button = this.form.find(this.burron_users);
		this.$div = this.form.find(this.div_dossier);

		let options = this.getOptions();

		this.$button.click( () =>  this.getDossier()); 
	}
	
	getOptions() {
		this.users.forEach(function(user) {
			this.$select.append(new Option(user.name, user.id));
		})
	}
	
	getDossier() {
			this.$div.empty();
	
			this.users.forEach(function(user) {
				if(user.id == users_name.value) {
					this.$div.append(`<p>${JSON.stringify(user)}</p>`);
				}
			})
			
			
			
	}
}; 
*/

/* Есть базы:  
альбомов https://jsonplaceholder.typicode.com/albums 
фотографий https://jsonplaceholder.typicode.com/photos 

На одной странице реализуйте возможность просмотреть любой из 100 альбомов.
Фотографии альбома должны загружаться только после выбора соответствующего альбома.
P.S. Отфильтровать фотографии по принадлежности к альбому можно добавив параметр albumId=идентификатор_альбома
*/ 

class Albums {
	constructor(albums) {
		this.$div = $('.album');
		this.albums = albums;
	}
	
	createAlbums() {
		this.albums.forEach(function(elem) {
			this.$div.append(`<div id='${elem.id}'>${elem.title}</div>`);
		})
			
	}
}

class Photos {
	constructor(photo) {
		this.photo = photo;	
	}
}

$.ajax('https://jsonplaceholder.typicode.com/photos', {
	method: 'GET',
	dataType: 'json',

	success: function(photos) {
		new Photos(photos);
	}	
})

$.ajax('https://jsonplaceholder.typicode.com/albums', {
	method: 'GET',
	dataType: 'json',

	success: function(albums) {
		let col = new Albums(albums);
		col.createAlbums();
	}	
})


