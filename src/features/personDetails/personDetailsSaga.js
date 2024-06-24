import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getMovieCredits, getPerson } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  readyStatus,
  resetShowContent,
} from "../pageStateSlice";
import { setMovieCredits, setPerson } from "./peopleDetailSlice";

function* fetchApiHandler({ payload: { pathName, id } }) {
  if (pathName !== `/people/details/${id}`) return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    const person = yield call(getPerson, id);
    if (!person) {
      throw new Error("People details not found");
    }
    const credits = yield call(getMovieCredits, id);
    yield put(setPerson(person));
    yield put(setMovieCredits(credits));
    yield put(readyStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);
}
