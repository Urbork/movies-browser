import {
  popularMoviesUrl,
  genreUrl,
  movieDetailsUrl,
  creditsUrl,
  popularPeopleUrl,
  personUrl,
  movieCreditsUrl,
  searchMovieUrl
} from "./api";

const fetchApi = (url) => (
  fetch(url).then(response => {
    console.log(response)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
    .catch(err => {
      console.error(err)
    })
);

export const getPopularMovies = (page) => {
  const updatedUrl = popularMoviesUrl.replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getMovieDetails = (id) => {
  const updatedUrl = movieDetailsUrl.replace("{movie_id}", id);
  return fetchApi(updatedUrl);
};

export const getGenres = () => (
  fetchApi(genreUrl)
);

export const getCredits = (id) => {
  const updatedUrl = creditsUrl.replace("{movie_id}", id);
  return fetchApi(updatedUrl);
};

export const getPopularPeople = (page) => {
  const updatedUrl = popularPeopleUrl.replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getPerson = (id) => {
  const updatedUrl = personUrl.replace("{person_id}", id);
  return fetchApi(updatedUrl);
};

export const getMovieCredits = (id) => {
  const updatedUrl = movieCreditsUrl.replace("{person_id}", id);
  return fetchApi(updatedUrl);
};

export const getSearchMovie = (query, page) => {
  const updatedUrl = searchMovieUrl.replace("{query}", query).replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getSearchPerson = (query, page) => {
  const updatedUrl = searchMovieUrl.replace("{query}", query).replace("{page}", page);
  return fetchApi(updatedUrl);
};