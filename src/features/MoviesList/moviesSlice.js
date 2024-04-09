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
    changePageToFirst: (state) => {
      state.pages.currentPage = state.pages.firstPage;
    },
    changePageToPrevious: (state) => {
      if (state.pages.currentPage === state.pages.firstPage) return
      state.pages.currentPage--
    },
    changePageToNext: (state) => {
      if (state.pages.currentPage === state.pages.lastPage) return
      state.pages.currentPage++
    },
    changePageToLast: (state) => {
      state.pages.currentPage = state.pages.lastPage;
    },
  },
});

export const {
  fetchPopularMovies,
  setPopularMovies,
  resetFetchStatus,
  fetchError,
  changePageToFirst,
  changePageToPrevious,
  changePageToNext,
  changePageToLast,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectPopularMovies = state => selectMoviesState(state).popularMovies;
export const selectMovieDetails = state => selectMoviesState(state).movieDetails;
export const selectFetchStatus = state => selectMoviesState(state).fetchStatus;
export const selectPages = state => selectMoviesState(state).pages;
export const selectCurrentPage = state => selectPages(state).currentPage;



export default moviesSlice.reducer;