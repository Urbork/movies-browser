import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    display: "movies",
    popularMovies: [],
    movieDetails: {},
    genres: [],
    fetchStatus: "ready",
    pages: {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    },
  },
  reducers: {
    fetchApi: (state) => {
      state.fetchStatus = "loading";
    },
    resetFetchStatus: (state) => {
      state.fetchStatus = "ready";
    },
    fetchError: (state) => {
      state.fetchStatus = "error";
    },
    setPopularMovies: (state, { payload: movies }) => {
      state.popularMovies = movies;
    },
    setMovieDetailsId: (state, { payload: id }) => {
      state.movieDetails.id = id;
    },
    setMovieDetails: (state, { payload: content }) => {
      state.movieDetails.content = content;
      state.display = "movieDetails";
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setCredits: (state, { payload: credits }) => {
      state.movieDetails.credits = credits;
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
    switchToMovies: (state) => {
      state.display = "movies";
    },
    switchToPeople: (state) => {
      state.display = "people";
    },
  },
});

export const {
  fetchApi,
  resetFetchStatus,
  fetchError,
  setPopularMovies,
  setMovieDetailsId,
  setMovieDetails,
  setGenres,
  setCredits,
  changePageToFirst,
  changePageToPrevious,
  changePageToNext,
  changePageToLast,
  switchToMovies,
  switchToPeople,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectDisplay = state => selectMoviesState(state).display;
export const selectPopularMovies = state => selectMoviesState(state).popularMovies;
export const selectMovieDetails = state => selectMoviesState(state).movieDetails;
export const selectMovieDetailsId = state => selectMovieDetails(state).id
export const selectMovieDetailsContent = state => selectMovieDetails(state).content
export const selectMovieDetailsCredits = state => selectMovieDetails(state).credits
export const selectGenres = state => selectMoviesState(state).genres;
export const selectFetchStatus = state => selectMoviesState(state).fetchStatus;
export const selectPages = state => selectMoviesState(state).pages;
export const selectFirstPage = state => selectPages(state).firstPage;
export const selectCurrentPage = state => selectPages(state).currentPage;
export const selectLastPage = state => selectPages(state).lastPage;

export default moviesSlice.reducer;