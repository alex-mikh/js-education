"use strict"; /* jshint -W097 */

const numberOfFilms = prompt("How maaaaany films have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


const lastFilm = prompt("What was the last movie you watched?", "");
const rate = prompt("What rating did you give him?", "1-10");


personalMovieDB.movies[lastFilm] = rate;

console.log(personalMovieDB);