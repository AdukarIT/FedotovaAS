//Все элементы label внутри таблицы. Должно быть 3 элемента.
let table = document.getElementById("age-table");
let label = table.getElementsByTagName('label');
label;
//Первую ячейку таблицы (со словом "Возраст").
let tdAge = table.getElementsByTagName('td')[0];
tdAge;
//Вторую форму в документе.
let form2 = document.body.lastElementChild;
form2;
//Форму с именем search, без использования её позиции в документе
let search = document.forms['search'];
search;
//Элемент input в форме с именем search. Если их несколько, то нужен первый.
let input = document.querySelector("form[name='search'] input");
input;
//Элемент с именем info[0], без точного знания его позиции в документе.
let info = document.getElementsByName("info[0]")[0];
info;
//Элемент с именем info[0], внутри формы с именем search-person.
let info2 = document.querySelector('form[name="search-person"] [name="info[0]"]');
info2;