// Задание 1
// for (i = 2; i <=10; i++ ) {

//     if (i % 2 == 0) {
//     alert (i);
//     }
// }


// Задание 2
// Условие
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// Выполнение
// let i = 0;
// while (i < 3) {
//   alert( ` number ${i}! ` );
//   i++;
// }


// Задание 3
// let number;
// do {
//     number = prompt ("Введите число больше 100", 0); 
// } while (number <=100 && number) {
//     alert (number);
//     }


// Задание 4
// let n = 10;

// nextOne:
// for (let i = 2; i <= n; i++) {

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextOne;
//   }

//   alert( i );
// }



// 1.14 js Задача 1

let browser = prompt('Введите ваш браузер', 'Browser');
const normalizedBrowser = browser?.toLowerCase();
const supportedBrowsers = ['chrome', 'firefox', 'safari', 'opera'];

if (normalizedBrowser === 'edge') {
    alert("You've got the Edge!");
} else if (supportedBrowsers.includes(normalizedBrowser)) {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}



// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//         alert('Вы ввели число 2');
//         break;
//     case 3:
//         alert('Вы ввели число 3');
//         break;

//         default:
//             alert('Я не это просил');
// }