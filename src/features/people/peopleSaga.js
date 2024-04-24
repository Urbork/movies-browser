import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "../../api/fetchApi";
import { setPopularPeople } from "./peopleSlice";
import {
  fetchApi, fetchError,
  resetFetchStatus,
  selectCurrentPeoplePage,
  setCurrentPeoplePage,
  setImagesToLoad,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPeoplePage);
    const people = yield call(() => getPopularPeople(page));
    yield delay(1000);
    yield put(setPopularPeople(people.results));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* peopleSaga() {
  yield takeLatest(setCurrentPeoplePage.type, fetchApiHandler);
};