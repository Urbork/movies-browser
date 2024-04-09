import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies, setPopularMovies, resetFetchStatus, fetchError } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(1000);
    const movies = yield call(getPopularMovies);
    yield put(setPopularMovies(movies));
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  };
};

export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
};