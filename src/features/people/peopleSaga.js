import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPopularPeople, getSearchPerson } from "../../api/fetchApi";
import { setPopularPeople, setSearchPerson } from "./peopleSlice";
import {
  changePageToFirst,
  changePageToLast,
  changePageToNext,
  changePageToPrevious,
  fetchApi,
  fetchError,
  peopleDisplay,
  resetFetchStatus,
  selectCurrentPage,
  selectQuery,
  setImagesToLoad,
  setQuery,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPage);
    const query = yield select(selectQuery);
    let people;
    if (query) {
      people = yield call(() => getSearchPerson(query, page));
      yield put(setSearchPerson(people.results));
    } else {
      people = yield call(() => getPopularPeople(page));
      yield put(setPopularPeople(people.results));
    }
    yield delay(1000);
    yield put(setImagesToLoad());
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  }
}

export function* peopleSaga() {
  yield takeLatest(
    [
      changePageToFirst.type,
      changePageToPrevious.type,
      changePageToNext.type,
      changePageToLast.type,
      peopleDisplay.type,
      setQuery.type,
    ],
    fetchApiHandler
  );
}
