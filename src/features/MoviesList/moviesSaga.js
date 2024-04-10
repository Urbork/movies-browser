import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchApi, setPopularMovies, resetFetchStatus, fetchError, selectPages, changePageToNext, changePageToFirst, changePageToPrevious, changePageToLast, switchToMovies, selectCurrentPage } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    const movies = yield call(() => getPopularMovies(page));
    yield put(setPopularMovies(movies.results));
    // yield delay(1);
    const scrollHeight = document.body.scrollHeight;
    yield call(() => window.scrollTo(0, scrollHeight));
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  };
};

export function* moviesSaga() {
  yield takeLatest([
    changePageToFirst.type,
    changePageToPrevious.type,
    changePageToNext.type,
    changePageToLast.type,
    switchToMovies.type,
  ], fetchApiHandler);
}