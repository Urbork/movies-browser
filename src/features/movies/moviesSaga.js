import {
  call,
  debounce,
  delay,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";
import { getGenres, getMovies, getSearchMovie } from "../../api/fetchApi";
import {
  clearAfterSearch,
  fetchApi,
  fetchError,
  fetchSearchApi,
  noResultsStatus,
  readyStatus,
  resetShowContent,
  selectQuery,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setLastSearchPage,
  setQuery,
  setTotalResults,
} from "../pageStateSlice";
import { selectGenres, setGenres, setMovies } from "./moviesSlice";

function* fetchApiHandler({ payload: { pathName, page } }) {
  if (pathName !== "/movies") return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    const storeGenres = yield select(selectGenres);
    if (!storeGenres) {
      const genres = yield call(getGenres);
      yield put(setGenres(genres.genres));
    }
    const storeQuery = yield select(selectQuery);
    if (storeQuery) yield put(clearAfterSearch());
    const movies = yield call(getMovies, page);
    yield put(setMovies(movies.results));
    yield put(setCurrentMoviePage(movies.page));
    yield put(readyStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchSearchApiHandler({ payload: { pathName, page, query } }) {
  if (pathName !== "/movies") return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    const movies = yield call(getSearchMovie, { page, query });
    if (page > movies.total_pages) {
      throw new Error("Page number exceeds total pages");
    }
    yield put(setQuery(query));
    yield put(setMovies(movies.results));
    yield put(setCurrentSearchPage(movies.page));
    yield put(setLastSearchPage(movies.total_pages));
    yield put(setTotalResults(movies.total_results));
    movies.total_results > 0
      ? yield put(readyStatus())
      : yield put(noResultsStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);
  yield debounce(1000, fetchSearchApi.type, fetchSearchApiHandler);
}
