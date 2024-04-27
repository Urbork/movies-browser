import { call, debounce, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPeople, getSearchPerson } from "../../api/fetchApi";
import { setPeople, setTotalPages, setTotalResults } from "./peopleSlice";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentPeoplePage,
  selectCurrentSearchPage,
  selectPeopleQuery,
  setCurrentPeoplePage,
  setCurrentSearchPage,
  setImagesToLoad,
  setPeopleQuery,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPeoplePage);
    const searchPage = yield select(selectCurrentSearchPage);
    const peopleQuery = yield select(selectPeopleQuery);
    if (peopleQuery) {
      const people = yield call(() => getSearchPerson(peopleQuery, searchPage));
      yield delay(1000);
      yield put(setPeople(people.results));
      yield put(setTotalPages(people.total_pages));
      yield put(setTotalResults(people.total_results));
    } else {
      const people = yield call(() => getPeople(page));
      yield put(setTotalPages(null));
      yield put(setTotalResults(null));
      yield delay(1000);
      yield put(setPeople(people.results));
    }
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* peopleSaga() {
  yield takeLatest(setCurrentPeoplePage.type, fetchApiHandler);
  yield takeLatest(setCurrentSearchPage.type, fetchApiHandler)
  yield debounce(1000, setPeopleQuery.type, fetchApiHandler)
};
