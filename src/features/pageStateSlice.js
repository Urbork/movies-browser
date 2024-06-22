import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../core/theme";
const mobileWidth = parseInt(theme.breakpoint.small);

const pageStateSlice = createSlice({
  name: "pageState",
  initialState: {
    fetchStatus: "ready",
    moviePages: {
      currentPage: 1,
      lastPage: 500,
    },
    peoplePages: {
      currentPage: 1,
      lastPage: 500,
    },
    searchPages: {
      currentPage: 1,
      lastPage: null,
    },
    query: "",
    totalResults: null,
    showContent: false,
    mobile: window.innerWidth < mobileWidth,
  },
  reducers: {
    fetchApi: (state) => {
      state.fetchStatus = "loading";
    },
    fetchSearchApi: (state) => {
      state.fetchStatus = "loading";
    },
    readyStatus: (state) => {
      state.fetchStatus = "ready";
    },
    noResultsStatus: (state) => {
      state.fetchStatus = "noResults";
    },
    fetchError: (state) => {
      state.fetchStatus = "error";
    },
    backToHome: (state) => {
      state.moviePages.currentPage = 1;
      state.peoplePages.currentPage = 1;
    },
    setShowContent: (state) => {
      state.showContent = true;
    },
    resetShowContent: (state) => {
      state.showContent = false;
    },
    setCurrentMoviePage: (state, { payload: page }) => {
      state.moviePages.currentPage = page;
    },
    setCurrentPeoplePage: (state, { payload: page }) => {
      state.peoplePages.currentPage = page;
    },
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
    clearAfterSearch: (state) => {
      state.searchPages.currentPage = 1;
      state.searchPages.lastPage = null;
      state.query = "";
      state.totalResults = null;
    },
    setCurrentSearchPage: (state, { payload: page }) => {
      state.searchPages.currentPage = page;
    },
    setLastSearchPage: (state, { payload: page }) => {
      state.searchPages.lastPage = page;
    },
    setTotalResults: (state, { payload: totalResults }) => {
      state.totalResults = totalResults;
    },
  },
});

export const {
  fetchApi,
  fetchSearchApi,
  readyStatus,
  noResultsStatus,
  fetchError,
  backToHome,
  setShowContent,
  resetShowContent,
  setCurrentMoviePage,
  setCurrentPeoplePage,
  setQuery,
  clearAfterSearch,
  setCurrentSearchPage,
  setLastSearchPage,
  setTotalResults,
} = pageStateSlice.actions;

const selectPageState = (state) => state.pageState;
export const selectFetchStatus = (state) => selectPageState(state).fetchStatus;
export const selectMoviePages = (state) => selectPageState(state).moviePages;
export const selectCurrentMoviePage = (state) =>
  selectMoviePages(state).currentPage;
export const selectLastMoviePage = (state) => selectMoviePages(state).lastPage;
export const selectPeoplePages = (state) => selectPageState(state).peoplePages;
export const selectCurrentPeoplePage = (state) =>
  selectPeoplePages(state).currentPage;
export const selectLastPeoplePage = (state) =>
  selectPeoplePages(state).lastPage;
export const selectSearchPages = (state) => selectPageState(state).searchPages;
export const selectCurrentSearchPage = (state) =>
  selectSearchPages(state).currentPage;
export const selectLastSearchPage = (state) =>
  selectSearchPages(state).lastPage;
export const selectMobile = (state) => selectPageState(state).mobile;
export const selectShowContent = (state) => selectPageState(state).showContent;
export const selectQuery = (state) => selectPageState(state).query;
export const selectTotalResults = (state) =>
  selectPageState(state).totalResults;

export default pageStateSlice.reducer;
