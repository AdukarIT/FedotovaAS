/* Написать валидацию для формы заказа товара, содержащей следующие поля:
Фамилия и имя (не менее 3 символов, обязательное поле)
Номер телефона после кода страны (только цифры, обязательное поле)
E-mail (корректный email, обязательное поле)
Способ доставки (обязательное поле):
Самовывоз со склада
Курьером по Минску
Почтой
Комментарий к заказу
Чекбокс "Я прочитал и согласен с условиями доставки" (обязательное поле)
Кнопка "Подтвердить заказ"
*/
$(function() {
	$('#order').validate({
		
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			
			number: {
				number: true,
				required: true
			},
			
			mail: {
				email: true,
				required: true
			},
			
			delivery_method: {
				required: true
			},
			
			insight: {
				required: true
			}
		},
		
		messages: {
			name: {
				required: 'Поле обязательно для заполнения',
				minlength: 'Имя не короче 3х символов'
			},
			
			number: {
				number: 'Поле заполнено некооректно',
				required: 'Поле обязательно для заполнения'
			},
			
			mail: {
				email: 'Поле заполнено некооректно',
				required: 'Поле обязательно для заполнения'
			},
			
			delivery_method: {
				required: 'Поле обязательно для заполнения'
			},
			
			insight: {
				required: 'Поле обязательно для заполнения'
			}
		},
		
	});

/*
Задание 1
На странице есть таблица обращений клиентов со следующими столбцами:

имя клиента
телефон
дата обращения
тип обращения: вопрос, жалоба, благодарность.
Таблица изначально пуста. 

Под таблицей есть кнопка Новое обращение. 
По нажатию на неё открывается модальное окно с формой, 
которая содержит все нужные поля и кнопки Добавить и Отмена. 
Форма должна проверять валидность вводимых данных. 
По нажатию на кнопку Отмена окно закрывается и форма очищается. 
По нажатию на кнопку Добавить если все поля заполнены корректно, 
в таблицу добавляется соответствующая запись, окно закрывается и форма очищается.
	*/
	$('#dialogForm').validate({
		
		onsubmit: false,
		
		rules: {
			form_name_сlient: {
				required: true,
				minlength: 3
			},

			form_number_сlient: {
				number: true,
				required: true
			},

			form_data: {
				required: true,
				date: true
			},

			type_appeal: {
				required: true,
			}
		},

		messages: {
			form_name_сlient: {
				required: 'Поле обязательно для заполнения',
				minlength: 'Имя не короче 3х символов'
			},

			form_number_сlient: {
				number: 'Поле заполнено некооректно',
				required: 'Поле обязательно для заполнения'
			},

			form_data: {
				required: 'Поле обязательно для заполнения',
				date: 'Поле заполнено некооректно'
			},

			type_appeal: {
				required: 'Поле обязательно для заполнения'
			}
		},
		
	});
	
	let table = $('table')[0];
	let mesh = $('#dialog_window input');
	
	let appealDialog = $('#dialog_window').dialog({
		autoOpen: false,
		modal: true,
		buttons: {
		
			'Добавить': function() {  
				if($('#dialogForm').valid()){ 
					$(`<tr><td>${mesh[0].value}</td>
					<td>${mesh[1].value}</td>
					<td>${mesh[2].value}</td>
					<td>${$("[name='type_appeal']").val()}</td>
					</tr>`).appendTo(table);
					
					$('#dialogForm')[0].reset();
					$(this).dialog( "close" );
				}
			},

			'Удалить': function() {
				$('#dialogForm')[0].reset();
				$(this).dialog( "close" );
			},

		}
		
	});
	
	$('#appeal').click(function(e) {
		appealDialog.dialog('open');
	});
	

/*
Задание 2
Строки таблицы должны быть элементами Selectable. 
После таблицы добавить кнопку Удалить. 
После нажатия на неё, если выбрана хотя бы одна строка, 
должно появиться модальное окно с текстом "Вы действительно хотите удалить эти обращения" 
и кнопками ОК и Отмена. В случае нажатия на Отмена окно закрывается. 
При нажатии на ОК выбранные строки-обращения удаляются.
*/
$('#tbselect').selectable();
$("#selectable").selectable();	
	
});
