import { call, delay, put, select } from "redux-saga/effects";
import { getGenres, getPopularMovies, getPopularPeople } from "../../api/fetchApi";
import { setGenres, setPopularMovies } from "./moviesSlice";
import { fetchApi, fetchError, resetFetchStatus, selectCurrentPage } from "../pageState/pageStateSlice";
import { setPopularPeople } from "../people/peopleSlice";

export function* initializeSagaHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    const movies = yield call(() => getPopularMovies(page));
    const genres = yield call(() => getGenres());
    const people = yield call(() => getPopularPeople(page));
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
    yield put(setGenres(genres.genres));
    yield put(setPopularPeople(people.results));
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