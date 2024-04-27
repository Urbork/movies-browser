import { call, debounce, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPeople, getSearchPerson } from "../../api/fetchApi";
import { selectPeopleTotalResults, setPeople, setPeopleTotalPages, setPeopleTotalResults } from "./peopleSlice";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentPeoplePage,
  selectCurrentSearchPage,
  selectPeopleQuery,
  setCurrentPeoplePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setImagesToLoad,
  setPeopleQuery,
  setPeopleQueryToDisplay,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentPeoplePage);
    const searchPage = yield select(selectCurrentSearchPage);
    const peopleQuery = yield select(selectPeopleQuery);
    if (peopleQuery) {
      const people = yield call(() => getSearchPerson(peopleQuery, searchPage));
      yield put(setPeople(people.results));
      yield put(setPeopleTotalPages(people.total_pages));
      yield put(setPeopleTotalResults(people.total_results));
      yield put(setPeopleQueryToDisplay(peopleQuery));
      // yield delay(1000);

    } else {
      const people = yield call(() => getPeople(page));
      yield put(setPeopleTotalPages(null));
      yield put(setPeopleTotalResults(null));
      yield put(setPeople(people.results));
      yield put(setPeopleQueryToDisplay(null));
      yield delay(1000);

    }
    // const totalResult = yield select(selectPeopleTotalResults)
    // if (!!totalResult && totalResult > 0) yield put(setImagesToLoad());
    yield delay(1000);
    yield put(setImagesLoaded());
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
