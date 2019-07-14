/*Нужно создать пустой html документ и заполнить его используя различные методы работы с документом. 
Тело документа должно содержать следующий код:
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>
Сделайте красными все внешние ссылки (имеющие начало с http://), поменяйте местами два произвольных элемента списка
*/
let ul = document.createElement('ul');
let li = document.createElement('li');
let a = document.createElement('a');
const body = document.body;
body.appendChild(ul);
let list = document.getElementsByTagName('ul')[0];
for(i = 0; i < 6; i++) {
    list.appendChild(document.createElement('li'));
}
let listItems = list.getElementsByTagName('li');
for(i = 0; i < 6; i++) {
    listItems[i].appendChild(document.createElement('a'));
}
