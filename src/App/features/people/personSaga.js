import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getMovieCredits, getPerson } from "../../api/fetchApi";
import {
  clearPeopleState,
  selectPersonId,
  setMovieCredits,
  setPerson,
  setPersonId,
} from "./peopleSlice";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  setImagesToLoad,
} from "../../pageStateSlice";
import { clearMoviesState } from "../movies/moviesSlice";

function* fetchApiHandler({ payload: { pathName, id } }) {
  if (pathName !== `/people/details/${id}`) return;
  console.log("SAGA details Person");
  try {
    // yield put(fetchApi());
    yield put(clearMoviesState());
    yield put(clearPeopleState());

    // const id = yield select(selectPersonId);
    const person = yield call(() => getPerson(id));
    if (!person) {
      throw new Error("People details not found");
    }
    const credits = yield call(() => getMovieCredits(id));
    yield put(setPerson(person));
    yield put(setMovieCredits(credits));
    // if (person.profile_path) yield put(setImagesToLoad()); // wyłączenie tymczasowe
    yield delay(1000);
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* personSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);

  // yield takeLatest(setPersonId.type, fetchApiHandler);
}
