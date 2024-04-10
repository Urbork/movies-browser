import { call, delay, put, select } from "redux-saga/effects";
import { getGenres, getPopularMovies } from "../../api/fetchApi";
import {
  fetchError,
  fetchApi,
  resetFetchStatus,
  setPopularMovies,
  switchToMovies,
  selectCurrentPage,
  setGenres
} from "./moviesSlice";

export function* initializeSagaHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    const movies = yield call(() => getPopularMovies(page));
    const genres = yield call(() => getGenres());
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
    yield put(switchToMovies());
    yield put(setGenres(genres.genres));
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  };
};

export function* initializeSaga() {
  yield call(initializeSagaHandler);
};