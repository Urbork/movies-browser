import { call, debounce, delay, put, select, takeLatest } from "redux-saga/effects";
import { setMovies, setMoviesTotalPages, setMoviesTotalResults } from "./moviesSlice";
import { getMovies, getSearchMovie } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectFirstSearchPage,
  selectMoviesQuery,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setImagesToLoad,
  setMoviesQuery,
  setMoviesQueryToDisplay,
} from "../pageState/pageStateSlice";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectCurrentMoviePage);
    const searchPage = yield select(selectCurrentSearchPage);
    const moviesQuery = yield select(selectMoviesQuery);
    if (moviesQuery) {
      const movies = yield call(() => getSearchMovie(moviesQuery, searchPage))
      yield put(setMovies(movies.results));
      yield put(setMoviesTotalPages(movies.total_pages));
      yield put(setMoviesTotalResults(movies.total_results));
      yield put(setMoviesQueryToDisplay(moviesQuery));
      yield delay(1000);
    } else {
      const movies = yield call(() => getMovies(page))
      yield put(setMoviesTotalPages(null));
      yield put(setMoviesTotalResults(null));
      yield put(setMovies(movies.results));
      yield put(setMoviesQueryToDisplay(null));
      yield delay(1000);
    };
    yield put(setImagesToLoad());
    const firstSearchPage = yield select(selectFirstSearchPage)
    const currentSearchPage = yield select(selectCurrentSearchPage)
    if (firstSearchPage === currentSearchPage) {
      yield put(setImagesLoaded())
    };
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* moviesSaga() {
  yield takeLatest(setCurrentMoviePage.type, fetchApiHandler);
  yield takeLatest(setCurrentSearchPage.type, fetchApiHandler);
  yield debounce(1000, setMoviesQuery.type, fetchApiHandler);
};
