import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPopularPeople, getSearchPerson } from "../../api/fetchApi";
import { setPopularPeople, setSearchPerson } from "./peopleSlice";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentPeoplePage,
  selectQuery,
  setCurrentPeoplePage,
  setImagesToLoad,
  setQuery,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPeoplePage);
    const query = yield select(selectQuery);
    let people;
    if (query) {
      people = yield call(() => getSearchPerson(query, page));
      yield delay(1000);
      yield put(setSearchPerson(people.results));
    } else {
      people = yield call(() => getPopularPeople(page));
      yield delay(1000);
    }
    yield put(setPopularPeople(people.results));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* peopleSaga() {
  yield takeLatest([setCurrentPeoplePage.type, setQuery.type], fetchApiHandler);
}
