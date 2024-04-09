import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    movieDetails: null,
    fetchStatus: "ready",
    pages: {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    },
  },
  reducers: {
    fetchPopularMovies: (state) => {
      state.fetchStatus = "loading";
    },
    setPopularMovies: (state, { payload: movies }) => {
      state.popularMovies = movies;
    },
    resetFetchStatus: (state) => {
      state.fetchStatus = "ready";
    },
    fetchError: (state) => {
      state.fetchStatus = "error";
    },
  },
});

export const {
  fetchPopularMovies,
  setPopularMovies,
  resetFetchStatus,
  fetchError,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectPopularMovies = state => selectMoviesState(state).popularMovies;
export const selectMovieDetails = state => selectMoviesState(state).movieDetails;
export const selectFetchStatus = state => selectMoviesState(state).fetchStatus;
export const selectPages = state => selectMoviesState(state).pages;

export default moviesSlice.reducer;