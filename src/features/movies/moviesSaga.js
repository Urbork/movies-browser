import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { setPopularMovies, setSearchResults } from "./moviesSlice";
import { getPopularMovies, getSearchMovie } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentMoviePage,
  selectQuery,
  setCurrentMoviePage,
  setImagesToLoad,
  setQuery,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentMoviePage);
    const query = yield select(selectQuery);
    let movies;
    if (query) {
      movies = yield call(() => getSearchMovie(query, page));
      yield delay(1000);
      yield put(setSearchResults(movies.results));
    } else {
      movies = yield call(() => getPopularMovies(page));
      yield delay(1000);
    }
    yield put(setPopularMovies(movies.results));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* moviesSaga() {
  yield takeLatest([setCurrentMoviePage.type, setQuery.type], fetchApiHandler);
}
