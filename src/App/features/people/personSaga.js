import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getMovieCredits, getPerson } from "../../api/fetchApi";
import { selectPersonId, setMovieCredits, setPerson, setPersonId } from "./peopleSlice";
import { fetchApi, fetchError, resetFetchStatus, setImagesToLoad } from "../../pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const id = yield select(selectPersonId);
    const person = yield call(() => getPerson(id));
    if (!person) {
      throw new Error("People details not found");
    }
    const credits = yield call(() => getMovieCredits(id));
    yield put(setPerson(person));
    yield put(setMovieCredits(credits));
    if (person.profile_path) yield put(setImagesToLoad());
    yield delay(1000);
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  };
};

export function* personSaga() {
  yield takeLatest(setPersonId.type, fetchApiHandler);
};