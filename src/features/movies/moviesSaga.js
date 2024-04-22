import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { setPopularMovies } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";
import {
  changePageToFirst,
  changePageToLast,
  changePageToNext,
  changePageToPrevious,
  fetchApi, fetchError,
  moviesDisplay,
  resetFetchStatus,
  selectCurrentMoviePage,
  selectCurrentPage,
  setCurrentMoviePage,
  setCurrentPage,
  setImagesToLoad
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    // yield put(()=>setCurrentPage(1))

    const page = yield select(selectCurrentMoviePage);
    const movies = yield call(() => getPopularMovies(page));
    yield delay(1000);
    yield put(setImagesToLoad());
    yield put(setPopularMovies(movies.results));
    yield put(resetFetchStatus());

  } catch (error) {
    yield put(fetchError());
    yield delay(3000);

  } finally {
    // yield put(resetFetchStatus());
  };
};

export function* moviesSaga() {
  yield takeLatest([
    // changePageToFirst.type,
    // changePageToPrevious.type,
    // changePageToNext.type,
    // changePageToLast.type,
    // moviesDisplay.type,

    setCurrentMoviePage.type
  ], fetchApiHandler);
}