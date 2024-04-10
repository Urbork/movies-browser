import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { setPopularMovies } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";
import { changePageToFirst, changePageToLast, changePageToNext, changePageToPrevious, fetchApi, fetchError, moviesDisplay, resetFetchStatus, selectCurrentPage } from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    const movies = yield call(() => getPopularMovies(page));
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
    // yield put(moviesDisplay());
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
    moviesDisplay.type
  ], fetchApiHandler);
}