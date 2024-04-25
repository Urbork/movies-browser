import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { setPopularMovies } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";
import {
  fetchApi, fetchError,
  resetFetchStatus,
  selectCurrentMoviePage,
  setCurrentMoviePage,
  setImagesToLoad
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentMoviePage);
    const movies = yield call(() => getPopularMovies(page));
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* moviesSaga() {
  yield takeLatest(setCurrentMoviePage.type, fetchApiHandler);
};