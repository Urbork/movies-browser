import {
  popularMoviesUrl,
  genreUrl,
  movieDetailsUrl,
  creditsUrl,
  popularPeopleUrl,
  personUrl,
  movieCreditsUrl,
  searchMovieUrl,
  searchPersonUrl,
} from "./api";

const fetchApi = (url) =>
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });

export const getMovies = (page) => {
  const updatedUrl = popularMoviesUrl.replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getMovieDetails = (id) => {
  const updatedUrl = movieDetailsUrl.replace("{movie_id}", id);
  return fetchApi(updatedUrl);
};

export const getGenres = () => fetchApi(genreUrl);

export const getCredits = (id) => {
  const updatedUrl = creditsUrl.replace("{movie_id}", id);
  return fetchApi(updatedUrl);
};

export const getPeople = (page) => {
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

export const getSearchMovie = ({ page, query }) => {
  const updatedUrl = searchMovieUrl
    .replace("{query}", query)
    .replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getSearchPerson = ({ page, query }) => {
  const updatedUrl = searchPersonUrl
    .replace("{query}", query)
    .replace("{page}", page);
  return fetchApi(updatedUrl);
};
