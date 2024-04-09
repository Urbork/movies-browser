import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies, setPopularMovies, resetFetchStatus, fetchError, selectPages, changePageToNext, changePageToFirst, changePageToPrevious, changePageToLast } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";

function* fetchPopularMoviesHandler() {
  try {
    const page = yield select(selectPages);
    const movies = yield call(() => getPopularMovies(page.currentPage));
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
  } catch (error) {
    yield put(fetchError());
    yield delay(1000);
  } finally {
    yield put(resetFetchStatus());
  };
};

export function* moviesSaga() {
  // yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(changePageToFirst.type, fetchPopularMoviesHandler);
  yield takeLatest(changePageToPrevious.type, fetchPopularMoviesHandler);
  yield takeLatest(changePageToNext.type, fetchPopularMoviesHandler);
  yield takeLatest(changePageToLast.type, fetchPopularMoviesHandler);
};