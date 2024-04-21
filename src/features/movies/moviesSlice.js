import { createSlice } from "@reduxjs/toolkit";
import { getSearchMovie } from "../../api/fetchApi";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    movieDetails: {},
    genres: [],
    searchResults: [],
  },
  reducers: {
    setPopularMovies: (state, { payload: movies }) => {
      state.popularMovies = movies;
    },
    setMovieDetailsId: (state, { payload: id }) => {
      state.movieDetails.id = id;
    },
    setMovieDetails: (state, { payload: content }) => {
      state.movieDetails.content = content;
    },
    setCredits: (state, { payload: credits }) => {
      state.movieDetails.credits = credits;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setSearchResults: (state, { payload: results }) => {
      state.searchResults = results;
    },
  },
});

export const {
  setPopularMovies,
  setMovieDetailsId,
  setMovieDetails,
  setCredits,
  setGenres,
  setSearchResults,
} = moviesSlice.actions;

export const searchMoviesAsync = (query, page) => async (dispatch) => {
  try {
    const response = await getSearchMovie(query, page);
    dispatch(setSearchResults(response.results));
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

const selectMoviesState = (state) => state.movies;

export const selectPopularMovies = (state) =>
  selectMoviesState(state).popularMovies;
export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails;
export const selectMovieDetailsId = (state) => selectMovieDetails(state).id;
export const selectMovieDetailsContent = (state) =>
  selectMovieDetails(state).content;
export const selectMovieDetailsCredits = (state) =>
  selectMovieDetails(state).credits;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMoviesByQuery = (state, query) => {
  const movies = selectPopularMovies(state);

  if (!query || query.trim() === "") {
    return movies;
  }

  return movies.filter(({ title }) =>
    title.toUpperCase().includes(query.toUpperCase().trim())
  );
};
export const selectSearchResults = (state) =>
  selectMoviesState(state).searchResults;

export default moviesSlice.reducer;
