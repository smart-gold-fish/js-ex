"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const m1 = prompt("Один из последних просмотренных фильмов?");
const r1 = +prompt("На сколько оцените его?");
const m2 = prompt("Один из последних просмотренных фильмов?");
const r2 = +prompt("На сколько оцените его?");

personalMovieDB.movies[m1] = r1;
personalMovieDB.movies[m2] = r2;

console.log(personalMovieDB);
