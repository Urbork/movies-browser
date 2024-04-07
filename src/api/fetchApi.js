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