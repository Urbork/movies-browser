import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchApi, setPopularMovies, resetFetchStatus, fetchError, selectPages, changePageToNext, changePageToFirst, changePageToPrevious, changePageToLast, switchToMovies } from "./moviesSlice";
import { getPopularMovies } from "../../api/fetchApi";

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const page = yield select(selectPages);
    const movies = yield call(() => getPopularMovies(page.currentPage));
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
    // const scrollHeight = document.body.scrollHeight;
    // yield window.scrollTo(0, scrollHeight);
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  };
};

// export function* moviesSaga() {
//   yield takeLatest(changePageToFirst.type, fetchApiHandler);
//   yield takeLatest(changePageToPrevious.type, fetchApiHandler);
//   yield takeLatest(changePageToNext.type, fetchApiHandler);
//   yield takeLatest(changePageToLast.type, fetchApiHandler);
// };

export function* moviesSaga() {
  yield takeLatest([
    changePageToFirst.type,
    changePageToPrevious.type,
    changePageToNext.type,
    changePageToLast.type,
    switchToMovies.type,
  ], fetchApiHandler);
}