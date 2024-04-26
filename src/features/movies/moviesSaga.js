import { call, debounce, delay, put, select, takeLatest } from "redux-saga/effects";
import { setMovies } from "./moviesSlice";
import { getMovies, getSearchMovie } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectQuery,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setImagesToLoad,
  setLastSearchPage,
  setQuery,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentMoviePage);
    const searchPage = yield select(selectCurrentSearchPage);
    const query = yield select(selectQuery);
    if (query) {
      const movies = yield call(() => getSearchMovie(query, searchPage))
      yield delay(1000);
      yield put(setMovies(movies.results));
      yield put(setLastSearchPage(movies.total_pages));
    } else {
      const movies = yield call(() => getMovies(page))
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
  yield debounce(1000, setQuery.type, fetchApiHandler)
};
