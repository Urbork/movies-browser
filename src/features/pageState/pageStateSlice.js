import { createSlice } from "@reduxjs/toolkit";

const pageStateSlice = createSlice({
  name: "pageState",
  initialState: {
    fetchStatus: "ready",
    moviePages: {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    },
    peoplePages: {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    },
    searchPages: {
      firstPage: 1,
      currentPage: 1,
      lastPage: undefined,
    },
    screenWidth: {
      width: window.innerWidth,
      mobile: undefined,
    },
    imagesToLoad: false,
    query: null,
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
      state.moviePages.currentPage = state.moviePages.firstPage;
      state.peoplePages.currentPage = state.peoplePages.firstPage;
    },
    changeScreenWidth: (state, { payload: width }) => {
      state.screenWidth.width = width;
    },
    changeMobileState: (state, { payload: number }) => {
      if (state.screenWidth.width < number) state.screenWidth.mobile = true;
      if (state.screenWidth.width > number) state.screenWidth.mobile = false;
    },
    setImagesLoaded: (state) => {
      state.imagesToLoad = false;
    },
    setImagesToLoad: (state) => {
      state.imagesToLoad = true;
    },
    setCurrentMoviePage: (state, { payload: page }) => {
      state.moviePages.currentPage = page;
    },
    setCurrentPeoplePage: (state, { payload: page }) => {
      state.peoplePages.currentPage = page;
    },
    setQuery: (state, { payload: query }) => {
      state.searchPages.currentPage = state.searchPages.firstPage
      state.query = query;
    },
    setCurrentSearchPage: (state, { payload: page }) => {
      state.searchPages.currentPage = page;
    },
    setLastSearchPage: (state, { payload: page }) => {
      state.searchPages.lastPage = page;
    },
  },
});

export const {
  fetchApi,
  resetFetchStatus,
  fetchError,
  setCurrentMoviePage,
  setCurrentPeoplePage,
  changeScreenWidth,
  changeMobileState,
  setImagesLoaded,
  setImagesToLoad,
  setQuery,
  setCurrentSearchPage,
  setLastSearchPage,
} = pageStateSlice.actions;

const selectPageState = (state) => state.pageState;

export const selectFetchStatus = (state) => selectPageState(state).fetchStatus;

export const selectMoviePages = (state) => selectPageState(state).moviePages;
export const selectFirstMoviePage = (state) => selectMoviePages(state).firstPage;
export const selectCurrentMoviePage = (state) => selectMoviePages(state).currentPage;
export const selectLastMoviePage = (state) => selectMoviePages(state).lastPage;

export const selectPeoplePages = (state) => selectPageState(state).peoplePages;
export const selectFirstPeoplePage = (state) => selectPeoplePages(state).firstPage;
export const selectCurrentPeoplePage = (state) => selectPeoplePages(state).currentPage;
export const selectLastPeoplePage = (state) => selectPeoplePages(state).lastPage;

export const selectSearchPages = (state) => selectPageState(state).searchPages;
export const selectFirstSearchPage = (state) => selectSearchPages(state).firstPage;
export const selectCurrentSearchPage = (state) => selectSearchPages(state).currentPage;
export const selectLastSearchPage = (state) => selectSearchPages(state).lastPage;

export const selectScreen = (state) => selectPageState(state).screenWidth;
export const selectScreenWidth = (state) => selectScreen(state).width;
export const selectMobile = (state) => selectScreen(state).mobile;

export const selectImagesToLoad = (state) => selectPageState(state).imagesToLoad;

export const selectQuery = (state) => selectPageState(state).query;

export default pageStateSlice.reducer;
