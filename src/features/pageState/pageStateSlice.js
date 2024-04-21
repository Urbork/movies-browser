import { createSlice } from "@reduxjs/toolkit";

const pageStateSlice = createSlice({
  name: "pageState",
  initialState: {
    display: "movies",
    fetchStatus: "ready",
    pages: {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    },
    screenWidth: {
      width: window.innerWidth,
      mobile: undefined,
    },
    imagesToLoad: false,
    query: "",
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
    moviesDisplay: (state) => {
      // state.pages.currentPage = state.pages.firstPage;
      state.display = "movies";
    },
    peopleDisplay: (state) => {
      // state.pages.currentPage = state.pages.firstPage;
      state.display = "people";
    },
    movieDetailsDisplay: (state) => {
      state.display = "movieDetails";
    },
    personDisplay: (state) => {
      state.display = "person";
    },
    changePageToFirst: (state) => {
      state.pages.currentPage = state.pages.firstPage;
    },
    changePageToPrevious: (state) => {
      if (state.pages.currentPage === state.pages.firstPage) return;
      state.pages.currentPage--;
    },
    changePageToNext: (state) => {
      if (state.pages.currentPage === state.pages.lastPage) return;
      state.pages.currentPage++;
    },
    changePageToLast: (state) => {
      state.pages.currentPage = state.pages.lastPage;
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
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
  },
});

export const {
  fetchApi,
  resetFetchStatus,
  fetchError,
  moviesDisplay,
  peopleDisplay,
  movieDetailsDisplay,
  personDisplay,
  setCurrentPage,
  changePageToFirst,
  changePageToPrevious,
  changePageToNext,
  changePageToLast,
  changeScreenWidth,
  changeMobileState,
  setImagesLoaded,
  setImagesToLoad,
  setQuery,
} = pageStateSlice.actions;

const selectPageState = (state) => state.pageState;

export const selectDisplay = (state) => selectPageState(state).display;
export const selectFetchStatus = (state) => selectPageState(state).fetchStatus;
export const selectPages = (state) => selectPageState(state).pages;
export const selectFirstPage = (state) => selectPages(state).firstPage;
export const selectCurrentPage = (state) => selectPages(state).currentPage;
export const selectPreviousPage = (state) => selectCurrentPage(state) - 1;
export const selectNextPage = (state) => selectCurrentPage(state) + 1;
export const selectLastPage = (state) => selectPages(state).lastPage;
export const selectScreen = (state) => selectPageState(state).screenWidth;
export const selectScreenWidth = (state) => selectScreen(state).width;
export const selectMobile = (state) => selectScreen(state).mobile;
export const selectImagesToLoad = (state) =>
  selectPageState(state).imagesToLoad;
export const selectQuery = (state) => selectPageState(state).query;

export default pageStateSlice.reducer;
