import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { selectMovieDetailsId, setCredits, setMovieDetails, setMovieDetailsId } from "./moviesSlice";
import { getCredits, getMovieDetails } from "../../api/fetchApi";
import { fetchApi, fetchError, resetFetchStatus, setImagesToLoad } from "../pageState/pageStateSlice"

function* fetchApiHandler() {
  try {
    yield put(fetchApi());
    const id = yield select(selectMovieDetailsId);
    const movieDetails = yield call(() => getMovieDetails(id));
    if (!movieDetails) {
      throw new Error("Movie details not found"); 
    }
    const credits = yield call(() => getCredits(id));
    yield put(setMovieDetails(movieDetails));
    yield delay(1000);

    yield put(setCredits(credits));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* movieDetailsSaga() {
  yield takeLatest(setMovieDetailsId.type, fetchApiHandler);
};