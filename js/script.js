"use strict"; /* jshint -W097 */


// const userNumber = prompt('Введите свой возраст', '');
// if (userNumber >= 18) {
//     alert('Ok!');
// } else {
//     alert('Error');
// }

// const num = 48;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('So many');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// switch (num) {
//     case 49: 
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong');
//         break;
//     case 50:
//         console.log('Right');
//         break;
//     default: 
//         console.log('Not now');
//         break;
// }




let num = 50;

// for (let i = 10; i <= 20; i++) {
//     console.log(i);
// }

// let i = 10;
// while (i < 55) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i + ')))');
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?');
//     const b = prompt('На сколько баллов оцените его?');

//     if (a != '' && a != null && b != '' && b != null && a.length < 50) {
//         console.log('done');
//         personalMovieDB[a] = b;
//     } else {
//         console.log('error');
//         alert('Введите правильно');
//         i--;
// }
// }

// if (personalMovieDB.count < 10) {
//     alert('Просмотренно довольно мало фильмов');
// } else if (10 <= personalMovieDB <= 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB > 30) {
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }

// console.log(personalMovieDB);