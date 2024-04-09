import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { resetFetchStatus, fetchError, fetchApi } from "./moviesSlice";
import { getCredits, getMovieDetails } from "../../api/fetchApi";
import { selectMovieDetailsId, setCredits, setMovieDetails, setMovieDetailsId } from "./moviesSlice";


function* fetchApiHandler() {
  try {
    console.log("test")
    yield put(fetchApi());
    const id = yield select(selectMovieDetailsId);
    console.log("id", id)

    if (id) {
      const movieDetails = yield call(() => getMovieDetails(id));
      const credits = yield call(() => getCredits(id));
      yield delay(1000);
      yield put(setMovieDetails(movieDetails));
      yield put(setCredits(credits));
    }
  } catch (error) {
    yield put(fetchError());
    yield delay(3000);
  } finally {
    yield put(resetFetchStatus());
  };
};

export function* movieDetailsSaga() {
  yield takeLatest(setMovieDetailsId.type, fetchApiHandler);
};