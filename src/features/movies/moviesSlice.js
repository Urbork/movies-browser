import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: {
      credits: {},
    },
    genres: [],
    // moviesSearchResults: [],
  },
  reducers: {
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
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
    setMoviesSearchResults: (state, { payload: results }) => {
      state.moviesSearchResults = results;
    },
  },
});

export const {
  setMovies,
  setMovieDetailsId,
  setMovieDetails,
  setCredits,
  setGenres,
  setMoviesSearchResults,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) =>
  selectMoviesState(state).movies;
export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails;
export const selectMovieDetailsId = (state) => selectMovieDetails(state).id;
export const selectMovieDetailsContent = (state) =>
  selectMovieDetails(state).content;
export const selectMovieDetailsCredits = (state) =>
  selectMovieDetails(state).credits;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovieDetailsCreditsCast = (state) =>
  selectMovieDetailsCredits(state).cast;
export const selectMovieDetailsCreditsCrew = (state) =>
  selectMovieDetailsCredits(state).crew;
export const selectMoviesSearchResults = (state) =>
  selectMoviesState(state).moviesSearchResults;

export default moviesSlice.reducer;