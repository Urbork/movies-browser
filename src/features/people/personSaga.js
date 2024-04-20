import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getMovieCredits, getPerson } from "../../api/fetchApi";
import { selectPersonId, setMovieCredits, setPerson, setPersonId } from "./peopleSlice";
import { fetchApi, fetchError, personDisplay, resetFetchStatus, setImagesToLoad } from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const id = yield select(selectPersonId);
    if (id) {
      const person = yield call(() => getPerson(id));
      const credits = yield call(() => getMovieCredits(id));
      yield delay(1000);
      yield put(setPerson(person));
      yield put(setMovieCredits(credits));
      yield put(setImagesToLoad());
      yield put(personDisplay());
    }
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  };
};

export function* personSaga() {
  yield takeLatest(setPersonId.type, fetchApiHandler);
};