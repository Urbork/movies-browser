import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPeople, getSearchPerson } from "../../api/fetchApi";
import { setPeople } from "./peopleSlice";
import {
  clearAfterSearch,
  fetchApi,
  fetchError,
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

function* fetchApiHandler({ payload: { pathName, page, query } }) {
  if (pathName !== "/people") return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    if (query) {
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
    } else {
      const storeQuery = yield select(selectQuery);
      if (storeQuery) yield put(clearAfterSearch());
      const people = yield call(getPeople, page);
      yield put(setPeople(people.results));
      yield put(setCurrentPeoplePage(people.page));
      yield put(readyStatus());
    }
  } catch (error) {
    yield put(fetchError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);
}
