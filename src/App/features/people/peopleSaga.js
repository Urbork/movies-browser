import {
  call,
  debounce,
  delay,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import { getPeople, getSearchPerson } from "../../api/fetchApi";
import {
  clearPeopleState,
  setPeople,
  setPeopleTotalPages,
  setPeopleTotalResults,
} from "./peopleSlice";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentPeoplePage,
  selectCurrentSearchPage,
  selectPeopleQuery,
  selectPeopleQueryToDisplay,
  setCurrentPage,
  setCurrentPeoplePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setImagesToLoad,
  setPeopleQuery,
  setPeopleQueryToDisplay,
} from "../../pageStateSlice";
import { clearMoviesState } from "../movies/moviesSlice";

function* fetchApiHandler({ payload: { pathName, id, page } }) {
  if (pathName !== "people" || id) return;
  console.log("SAGA  People");

  try {
    // yield put(fetchApi());
    yield put(clearMoviesState());
    yield put(clearPeopleState());

    // const page = yield select(selectCurrentPeoplePage);
    const searchPage = yield select(selectCurrentSearchPage);
    const peopleQuery = yield select(selectPeopleQuery);
    if (peopleQuery) {
      const people = yield call(() => getSearchPerson(peopleQuery, searchPage));
      yield put(setPeople(people.results));
      yield put(setPeopleTotalPages(people.total_pages));
      yield put(setPeopleTotalResults(people.total_results));
      yield put(setPeopleQueryToDisplay(peopleQuery));
      yield delay(1000);
    } else {
      const people = yield call(() => getPeople(page));
      yield put(setPeopleTotalPages(null));
      yield put(setPeopleTotalResults(null));
      yield put(setPeople(people.results));
      yield put(setCurrentPeoplePage(people.page));
      yield put(setPeopleQueryToDisplay(null));
      yield delay(1000);
    }
    const peopleQueryToDisplay = yield select(selectPeopleQueryToDisplay);
    if (peopleQueryToDisplay) {
      // yield put(setImagesLoaded());  // wyłączenie tymczasowe
    } else {
      // yield put(setImagesToLoad());  // wyłączenie tymczasowe
    }
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);

  // yield takeLatest(setCurrentPeoplePage.type, fetchApiHandler);
  // yield takeLatest(setCurrentSearchPage.type, fetchApiHandler)
  // yield debounce(1000, setPeopleQuery.type, fetchApiHandler)
}
