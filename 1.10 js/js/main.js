/*Задание 1
'use strict';

let answer = prompt("Какое 'Официальное' название JavaScript?", '');

if (answer == 'ECMAScript') {
alert ("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}
*/

/* Задание 2

'use strict'

let userNumber = prompt ("Ваше число?", '')
if (userNumber > 0) {
    alert("1");

}  else if (userNumber < 0) {
    alert("-1");

}  else if (userNumber == 0) {
    alert("0");
}
*/


/*Задание 3
let result;

result = (a + b < 4) ? 'Мало' : 'Много'; 
*/

//Задание 4
'use strict'

let message = prompt ('Кто вы?', '');
let login = message = (message == 'Сотрудник') ? alert('Привет!') :
(message == 'Директор') ? alert('Здравствуйте') :
(message == '') ? alert('Нет логина') : '' ;