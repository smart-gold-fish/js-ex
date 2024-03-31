"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

if (numberOfFilms < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms < 31){
    console.log('Просмотрено довольно мало фильмов');
} else {
    console.log('Вы киноман');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let m1, r1
for (let i = 1; i <= 2; i++){
    do {
        m1 = prompt("Один из последних просмотренных фильмов?");
    } while (m1 === null || m1.length === 0 || m1.length > 50)
    r1 = +prompt("На сколько оцените его?");

    personalMovieDB.movies[m1] = r1;
}
console.log(personalMovieDB);
