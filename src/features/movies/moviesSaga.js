import {
  call,
  debounce,
  delay,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import { setPopularMovies } from "./moviesSlice";
import { getPopularMovies, getSearchMovie } from "../../api/fetchApi";
import {
  changePageToFirst,
  changePageToLast,
  changePageToNext,
  changePageToPrevious,
  fetchApi,
  fetchError,
  moviesDisplay,
  resetFetchStatus,
  selectCurrentPage,
  setImagesToLoad,
} from "../pageState/pageStateSlice";

function* fetchApiHandler(query, page) {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    let movies;
    if (query) {
      movies = yield call(() => getSearchMovie(query, page));
    } else {
      movies = yield call(() => getPopularMovies(page));
    }
    yield delay(1000);
    yield put(setImagesToLoad());
    yield put(setPopularMovies(movies.results));
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  }
}

export function* moviesSaga() {
  yield takeLatest(
    [
      changePageToFirst.type,
      changePageToPrevious.type,
      changePageToNext.type,
      changePageToLast.type,
      moviesDisplay.type,
    ],
    fetchApiHandler
  );
}
