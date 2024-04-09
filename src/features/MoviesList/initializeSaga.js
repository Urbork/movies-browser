import { call, delay, put, select } from "redux-saga/effects";
import { fetchError, fetchPopularMovies, resetFetchStatus, selectPages, setPopularMovies } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";

export function* initializeSaga() {
  try {
    yield put(fetchPopularMovies());
    const page = yield select(selectPages);
    const movies = yield call(() => getPopularMovies(page.firstPage));
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
  } catch (error) {
    yield put(fetchError());
    yield delay(1000);
  } finally {
    yield put(resetFetchStatus());
  };
};