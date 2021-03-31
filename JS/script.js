"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

function detectPersonalLevel() {
    if (numberOfFilms > 0 && numberOfFilms < 10) {
        alert("Просмотренно довольно мало фильмов");
    } else if (numberOfFilms > 0 && numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else if (numberOfFilms > 0 && numberOfFilms >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; ++i) {
        let a = prompt("Один из последних просмотренных фильмов?", "");

        if (a == null || a == '' || a.length > 50) {
            while (a == null || a == '' || a.length > 50) {
                a = prompt("Один из последних просмотренных фильмов?", "");
            }
        }

        let b = prompt("На сколько оцените его?", "");

        if (b == null || b == '' || b.length > 50) {
            while (b == null || b == '' || b.length > 50) {
                b = prompt("На сколько оцените его?", "");
            }
        }

        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; ++i) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);