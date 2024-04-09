import { popularMoviesUrl, genreUrl, movieDetailsUrl, creditsUrl, parametrs, movieCreditsUrl, personUrl, popularPeopleUrl } from "./api";

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

export const getPopularPeopleApi = () => fetch(popularPeopleUrl)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getPerson = () => fetch(personUrl)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getMovieCredits = () => fetch(movieCreditsUrl)
  .then(response => response.json())
  .catch(err => console.error(err));
