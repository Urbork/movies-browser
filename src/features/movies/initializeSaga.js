import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getGenres, getPopularMovies } from "../../api/fetchApi";
import { setGenres, setPopularMovies } from "./moviesSlice";
import { fetchApi, fetchError, moviesDisplay, resetFetchStatus, selectCurrentPage } from "../pageState/pageStateSlice";

export function* initializeSagaHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    const movies = yield call(() => getPopularMovies(page));
    const genres = yield call(() => getGenres());
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
    yield put(setGenres(genres.genres));
    // yield put(moviesDisplay());
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