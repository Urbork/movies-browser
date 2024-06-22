import {
  call,
  debounce,
  delay,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import { getPeople, getSearchPerson } from "../../api/fetchApi";
import { setPeople } from "./peopleSlice";
import {
  clearAfterSearch,
  fetchApi,
  fetchError,
  fetchSearchApi,
  noResultsStatus,
  readyStatus,
  resetShowContent,
  selectQuery,
  setCurrentPeoplePage,
  setCurrentSearchPage,
  setLastSearchPage,
  setQuery,
  setTotalResults,
} from "../pageStateSlice";

function* fetchApiHandler({ payload: { pathName, page } }) {
  if (pathName !== "/people") return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    const storeQuery = yield select(selectQuery);
    if (storeQuery) yield put(clearAfterSearch());
    const people = yield call(getPeople, page);
    yield put(setPeople(people.results));
    yield put(setCurrentPeoplePage(people.page));
    yield put(readyStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchSearchApiHandler({ payload: { pathName, page, query } }) {
  if (pathName !== "/people") return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    const people = yield call(getSearchPerson, { page, query });
    if (page > people.total_pages) {
      throw new Error("Page number exceeds total pages");
    }
    yield put(setQuery(query));
    yield put(setPeople(people.results));
    yield put(setCurrentSearchPage(people.page));
    yield put(setLastSearchPage(people.total_pages));
    yield put(setTotalResults(people.total_results));
    people.total_results > 0
      ? yield put(readyStatus())
      : yield put(noResultsStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);
  yield debounce(1000, fetchSearchApi.type, fetchSearchApiHandler);
}
