import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getCredits, getMovieDetails } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  readyStatus,
  resetShowContent,
} from "../pageStateSlice";
import { setCredits, setMovieDetails } from "./movieDetailsSlice";

function* fetchApiHandler({ payload: { pathName, id } }) {
  if (pathName !== `/movies/details/${id}`) return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    const movieDetails = yield call(getMovieDetails, id);
    if (!movieDetails) {
      throw new Error("Movie details not found");
    }
    const credits = yield call(getCredits, id);
    yield put(setMovieDetails(movieDetails));
    yield put(setCredits(credits));
    yield put(readyStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);
}
