import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "../../api/fetchApi";
import { setPopularPeople } from "./peopleSlice";
import {
  changePageToFirst,
  changePageToLast,
  changePageToNext,
  changePageToPrevious,
  fetchApi, fetchError,
  peopleDisplay,
  resetFetchStatus,
  selectCurrentPage,
  selectCurrentPeoplePage,
  setCurrentPeoplePage,
  setImagesToLoad
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPeoplePage);
    const people = yield call(() => getPopularPeople(page));
    yield delay(1000);
    yield put(setImagesToLoad());
    yield put(setPopularPeople(people.results));
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    // yield put(resetFetchStatus());
  };
};

export function* peopleSaga() {
  yield takeLatest([
    // changePageToFirst.type,
    // changePageToPrevious.type,
    // changePageToNext.type,
    // changePageToLast.type,
    setCurrentPeoplePage.type,
  ], fetchApiHandler);
}