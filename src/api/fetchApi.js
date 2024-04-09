import { popularMoviesUrl, genreUrl, movieDetailsUrl, creditsUrl, parametrs } from "./api";

export const getCredits = () => fetch(creditsUrl)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getGenre = () => fetch(genreUrl)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMovieDetails = (id) => fetch(movieDetailsUrl + id + parametrs)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getPopularMoviesApi = (page) => fetch(popularMoviesUrl + page)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getPopularPeopleApi = () => fetch(popularMoviesUrl)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getPerson = () => fetch(popularMoviesUrl)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMovieCredits = () => fetch(popularMoviesUrl)
  .then(response => response.json())
  .catch(err => console.error(err));
