"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            alert("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count > 0 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 0 && personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    rememberMyFilms: function () {
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
    },

    writeYourGenres: function () {
        let genres = prompt("Введите ваши любимые жанры через запятую").toLowerCase();

        if (genres == "" || genres == null) {
            while (genres == "" || genres == null) {
                genres = prompt("Введите ваши любимые жанры через запятую").toLowerCase();
            }
        } else {
            personalMovieDB.genres = genres.split(", ");
            personalMovieDB.genres.sort();
        }

        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);