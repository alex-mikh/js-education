"use strict"; /* jshint -W097 */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
let numberOfFilms;
let userTopGenres = [];

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


detectPersonalLevel();
writeYourGenres();
rememberMyFilms();
showMyDB(personalMovieDB.privat);


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre != '' && genre != null) {
            console.log('done');
            personalMovieDB.genres[i - 1] = genre;
        } else {
            console.log('error');
            alert('Введите правильно');
            i--;
        }
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?');
        const b = prompt('На сколько баллов оцените его?');
    
        if (a != '' && a != null && b != '' && b != null && a.length < 50) {
            console.log('done');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            alert('Введите правильно');
            i--;
        }
    }
}