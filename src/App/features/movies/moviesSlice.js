import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: {
      credits: {},
    },
    genres: [],
    total_pages: null,
    total_results: null,
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
    setMoviesTotalPages: (state, { payload: pages }) => {
      state.total_pages = pages;
    },
    setMoviesTotalResults: (state, { payload: results }) => {
      state.total_results = results;
    },
    clearMoviesAfterSearch: (state) => {
      state.total_results = null;
      state.total_pages = null;
    },
  },
});

export const {
  setMovies,
  setMovieDetailsId,
  setMovieDetails,
  setCredits,
  setGenres,
  setMoviesTotalPages,
  setMoviesTotalResults,
  clearMoviesAfterSearch,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovieDetails = (state) => selectMoviesState(state).movieDetails;
export const selectMovieDetailsId = (state) => selectMovieDetails(state).id;
export const selectMovieDetailsContent = (state) => selectMovieDetails(state).content;
export const selectMovieDetailsCredits = (state) => selectMovieDetails(state).credits;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovieDetailsCreditsCast = (state) => selectMovieDetailsCredits(state).cast;
export const selectMovieDetailsCreditsCrew = (state) => selectMovieDetailsCredits(state).crew;
export const selectMoviesTotalPages = (state) => selectMoviesState(state).total_pages;
export const selectMoviesTotalResults = (state) => selectMoviesState(state).total_results;

export default moviesSlice.reducer;