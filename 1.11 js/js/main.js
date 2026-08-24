/*Задание 1
'use strict';

let age = prompt('Ваш возраст?', '');

if (age >= 14 && age <= 90) {
    alert ("Молодец") }
    else {
        alert ("Чупеп")
    }
*/



/*Задание 2
'use strict';

let age = prompt('Ваш возраст?', '');

if (!(age >= 14 && age <= 90)) {
    alert ("Молодец") }
    else {
        alert ("Чупеп")
    }

//Вариант 2

if (age < 14 || age > 90) {
    alert ("Молодец") }
    else {
        alert ("Чупеп")
    }
*/


//Задание 3
'use strict';

let login = prompt("Кто там?", '');

if (login === 'Админ') {

  let password = prompt('Пароль?', '');

  if (password === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (password === '' || password === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (login === '' || login === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}