import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { selectMovieDetailsId, setCredits, setMovieDetails, setMovieDetailsId } from "./moviesSlice";
import { getCredits, getMovieDetails } from "../../api/fetchApi";
import { fetchApi, fetchError, movieDetailsDisplay, resetFetchStatus, setImagesToLoad } from "../pageState/pageStateSlice"

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const id = yield select(selectMovieDetailsId);
    if (id) {
      const movieDetails = yield call(() => getMovieDetails(id));
      const credits = yield call(() => getCredits(id));
      yield delay(1000);
      yield put(setMovieDetails(movieDetails));
      yield put(setCredits(credits));
      yield put(setImagesToLoad());
      yield put(movieDetailsDisplay());
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