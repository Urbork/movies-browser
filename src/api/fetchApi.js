import { popularMoviesUrl, genreUrl, movieDetailsUrl, creditsUrl, parametrs, popularPeopleUrl } from "./api";

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

export const getMovieDetails = (id) => fetch(movieDetailsUrl + id + parametrs)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getGenres = () => fetch(genreUrl)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getCredits = (id) => fetch(movieDetailsUrl + id + creditsUrl + parametrs)
  .then(response => response.json())
  .catch(err => console.error(err));

export const getPopularPeople = (page) => fetch(popularPeopleUrl + page)
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