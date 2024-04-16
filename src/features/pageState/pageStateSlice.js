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
      state.pages.currentPage = state.pages.firstPage;
      state.display = "movies";
    },
    peopleDisplay: (state) => {
      state.pages.currentPage = state.pages.firstPage;
      state.display = "people";
    },
    movieDetailsDisplay: (state) => {
      state.display = "movieDetails";
    },
    personDisplay: (state) => {
      state.display = "person";
    },
    setCurrentPage: (state, page) => {
      state.pages.currentPage = page;
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
} = pageStateSlice.actions;

const selectPageState = state => state.pageState;

export const selectDisplay = state => selectPageState(state).display;
export const selectFetchStatus = state => selectPageState(state).fetchStatus;
export const selectPages = state => selectPageState(state).pages;
export const selectFirstPage = state => selectPages(state).firstPage;
export const selectCurrentPage = state => selectPages(state).currentPage;
export const selectLastPage = state => selectPages(state).lastPage;

export default pageStateSlice.reducer;