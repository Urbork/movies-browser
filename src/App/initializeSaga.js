import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGenres, getMovies, getPeople } from "./api/fetchApi";
import { setGenres, setMovies } from "./features/movies/moviesSlice";
import { setPeople } from "./features/people/peopleSlice";
import {
  backToHome,
  fetchApi,
  fetchError,
  resetFetchStatus,
  setImagesToLoad,
} from "./pageStateSlice";

export function* initializeSagaHandler() {
  try {
    yield put(fetchApi());
    const movies = yield call(() => getMovies());
    const genres = yield call(() => getGenres());
    const people = yield call(() => getPeople());
    yield delay(1000);
    yield put(setMovies(movies.results));
    yield put(setGenres(genres.genres));
    yield put(setPeople(people.results));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* initializeSaga() {
  yield call(initializeSagaHandler);
  yield takeLatest(backToHome.type, initializeSagaHandler);
}
