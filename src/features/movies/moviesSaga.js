import { call, debounce, delay, put, select, takeLatest } from "redux-saga/effects";
import { selectMoviesTotalResults, setMovies, setMoviesTotalPages, setMoviesTotalResults } from "./moviesSlice";
import { getMovies, getSearchMovie } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectMoviesQuery,
  setCurrentMoviePage,
  setCurrentSearchPage,
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
      yield delay(1000);
      yield put(setMovies(movies.results));
      yield put(setMoviesTotalPages(movies.total_pages));
      yield put(setMoviesTotalResults(movies.total_results));
      yield put(setMoviesQueryToDisplay(moviesQuery));
    } else {
      const movies = yield call(() => getMovies(page))
      yield delay(1000);
      yield put(setMoviesTotalPages(null));
      yield put(setMoviesTotalResults(null));
      yield put(setMovies(movies.results));
      yield put(setMoviesQueryToDisplay(null));
    }
    const totalResult = yield select(selectMoviesTotalResults)
    if (!!totalResult && totalResult > 0) yield put(setImagesToLoad());
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
