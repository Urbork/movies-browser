import { call, delay, put, select } from "redux-saga/effects";
import { getGenres, getMovies, getPeople } from "../../api/fetchApi";
import { setGenres, setMovies } from "./moviesSlice";
import { setPeople } from "../people/peopleSlice";
import { fetchApi, fetchError, resetFetchStatus, selectFirstMoviePage, selectFirstPeoplePage, setImagesToLoad } from "../pageState/pageStateSlice";

export function* initializeSagaHandler() {
  try {
    yield put(fetchApi());
    const firstMoviePage = yield select(selectFirstMoviePage);
    const firstPeoplePage = yield select(selectFirstPeoplePage);
    const movies = yield call(() => getMovies(firstMoviePage));
    const genres = yield call(() => getGenres());
    const people = yield call(() => getPeople(firstPeoplePage));
    yield delay(1000);
    yield put(setMovies(movies.results));
    yield put(setGenres(genres.genres));
    yield put(setPeople(people.results));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* initializeSaga() {
  yield call(initializeSagaHandler);
};