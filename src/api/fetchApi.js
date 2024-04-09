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

export const getPopularMovies = (page) => fetch(popularMoviesUrl + page)
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .catch(err => {
    console.error(err)
  });