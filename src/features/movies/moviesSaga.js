import {
  call,
  debounce,
  delay,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import { setPopularMovies, setSearchResults } from "./moviesSlice";
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
  selectQuery,
  setImagesToLoad,
  setQuery,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    const query = yield select(selectQuery);
    let movies;
    if (query) {
      movies = yield call(() => getSearchMovie(query, page));
      yield put(setSearchResults(movies.results));
    } else {
      movies = yield call(() => getPopularMovies(page));
      yield put(setPopularMovies(movies.results));
    }
    yield delay(1000);
    yield put(setImagesToLoad());
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
      setQuery.type,
    ],
    fetchApiHandler
  );
}
