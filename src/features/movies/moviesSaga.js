import { call, debounce, delay, put, select, takeLatest } from "redux-saga/effects";
import { setMovies, setTotalPages, setTotalResults } from "./moviesSlice";
import { getMovies, getSearchMovie } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectMoviesQuery,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setImagesToLoad,
  setMoviesQuery,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentMoviePage);
    const searchPage = yield select(selectCurrentSearchPage);
    const moviesQuery = yield select(selectMoviesQuery);
    if (moviesQuery) {
      const movies = yield call(() => getSearchMovie(moviesQuery, searchPage))
      yield delay(1000);
      yield put(setMovies(movies.results));
      yield put(setTotalPages(movies.total_pages));
      yield put(setTotalResults(movies.total_results));
    } else {
      const movies = yield call(() => getMovies(page))
      yield put(setTotalPages(null));
      yield put(setTotalResults(null));
      yield delay(1000);
      yield put(setMovies(movies.results));
    }
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* moviesSaga() {
  yield takeLatest(setCurrentMoviePage.type, fetchApiHandler);
  yield takeLatest(setCurrentSearchPage.type, fetchApiHandler)
  yield debounce(1000, setMoviesQuery.type, fetchApiHandler)
};
