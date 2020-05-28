/* eslint-disable linebreak-style */


import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";


const ROOT_URL = "https://api.themoviedb.org/3/discover/movie?api_key=2d7b73f455842047ab931dac2c9a1b65&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1";
const DETAILS_URL   = "https://api.themoviedb.org/3/movie/";

const API_KEY = "2d7b73f455842047ab931dac2c9a1b65";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
const GENRES_URL = "https://api.themoviedb.org/3/genre/movie/list";




export function getMovieList (date = "") {
    return axios.get(`${ROOT_URL}`);
}

export function getDetails (movieId) {
    return axios.get(`${DETAILS_URL}${movieId}?api_key=${API_KEY}&language=en-US`);
}

export function getSearch (input) {
    return axios.get(`${SEARCH_URL}?api_key=${API_KEY}&query=${input}&limit=100&language=en-US`)
}

export function getGenres() {
    return axios.get(`${GENRES_URL}?api_key=${API_KEY}&limit=100&language=en-US`)
}

