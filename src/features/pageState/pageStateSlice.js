import { createSlice } from "@reduxjs/toolkit";

const pageStateSlice = createSlice({
  name: "pageState",
  initialState: {
    display: "movies",
    fetchStatus: "ready",
    moviePages: {
      firstPage: 1,
      currentPage: 0,
      lastPage: 500,
    },
    peoplePages: {
      firstPage: 1,
      currentPage: 0,
      lastPage: 500,
    },
    screenWidth: {
      width: window.innerWidth,
      mobile: undefined
    },
    imagesToLoad: false,
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
    // changePageToFirst: (state) => {
    //   state.pages.currentPage = state.pages.firstPage;
    // },
    // changePageToPrevious: (state) => {
    //   if (state.pages.currentPage === state.pages.firstPage) return
    //   state.pages.currentPage--
    // },
    // changePageToNext: (state) => {
    //   if (state.pages.currentPage === state.pages.lastPage) return
    //   state.pages.currentPage++
    // },
    // changePageToLast: (state) => {
    //   state.pages.currentPage = state.pages.lastPage;
    // },
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
    }


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
  setCurrentMoviePage,
  setCurrentPeoplePage,
  // changePageToFirst,
  // changePageToPrevious,
  // changePageToNext,
  // changePageToLast,
  changeScreenWidth,
  changeMobileState,
  setImagesLoaded,
  setImagesToLoad,
} = pageStateSlice.actions;

const selectPageState = state => state.pageState;

export const selectDisplay = state => selectPageState(state).display;
export const selectFetchStatus = state => selectPageState(state).fetchStatus;

export const selectMoviePages = state => selectPageState(state).moviePages;
export const selectFirstMoviePage = state => selectMoviePages(state).firstPage;
export const selectCurrentMoviePage = state => selectMoviePages(state).currentPage;
export const selectLastMoviePage = state => selectMoviePages(state).lastPage;

export const selectPeoplePages = state => selectPageState(state).moviePages;
export const selectFirstPeoplePage = state => selectPeoplePages(state).firstPage;
export const selectCurrentPeoplePage = state => selectPeoplePages(state).currentPage;
export const selectLastPeoplePage = state => selectPeoplePages(state).lastPage;

// export const selectPreviousPage = state => selectCurrentPage(state) - 1;
// export const selectNextPage = state => selectCurrentPage(state) + 1;

export const selectScreen = state => selectPageState(state).screenWidth;
export const selectScreenWidth = state => selectScreen(state).width;
export const selectMobile = state => selectScreen(state).mobile;
export const selectImagesToLoad = state => selectPageState(state).imagesToLoad;

export default pageStateSlice.reducer;