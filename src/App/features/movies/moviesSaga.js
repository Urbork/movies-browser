import {
  call,
  debounce,
  delay,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  clearMoviesState,
  setMovies,
  setMoviesPage,
  setMoviesTotalPages,
  setMoviesTotalResults,
} from "./moviesSlice";
import { getMovies, getSearchMovie } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectMoviesQuery,
  selectMoviesQueryToDisplay,
  setCurrentMoviePage,
  setCurrentPage,
  setCurrentSearchPage,
  setImagesLoaded,
  setImagesToLoad,
  setMoviesQuery,
  setMoviesQueryToDisplay,
} from "../../pageStateSlice";
import { clearPeopleState } from "../people/peopleSlice";

function* fetchApiHandler({ payload: { pathName, page, id } }) {
  if (pathName !== "movies" || id) return;
  console.log("SAGA Movies");

  try {
    // yield put(fetchApi());
    yield put(clearMoviesState());
    yield put(clearPeopleState());

    // const page = yield select(selectCurrentMoviePage);
    const searchPage = yield select(selectCurrentSearchPage);
    const moviesQuery = yield select(selectMoviesQuery);
    if (moviesQuery) {
      const movies = yield call(() => getSearchMovie(moviesQuery, searchPage));
      yield put(setMovies(movies.results));
      yield put(setMoviesTotalPages(movies.total_pages));
      yield put(setMoviesTotalResults(movies.total_results));
      yield put(setMoviesQueryToDisplay(moviesQuery));
      yield delay(1000);
    } else {
      const movies = yield call(() => getMovies(page));
      yield put(setMoviesTotalPages(null));
      yield put(setMoviesTotalResults(null));
      yield put(setMovies(movies.results));
      yield put(setCurrentMoviePage(movies.page));
      yield put(setMoviesQueryToDisplay(null));
      yield delay(1000);
    }
    const moviesQueryToDisplay = yield select(selectMoviesQueryToDisplay);
    if (moviesQueryToDisplay) {
      // yield put(setImagesLoaded());   // wyłączenie tymczasowe
    } else {
      // yield put(setImagesToLoad());   // wyłączenie tymczasowe
    }
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);

  // yield takeLatest(setCurrentMoviePage.type, fetchApiHandler);
  // yield takeLatest(setCurrentSearchPage.type, fetchApiHandler);
  // yield debounce(1000, setMoviesQuery.type, fetchApiHandler);
}
