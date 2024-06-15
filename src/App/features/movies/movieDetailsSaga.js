import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  clearMoviesState,
  selectMovieDetailsId,
  setCredits,
  setMovieDetails,
  setMovieDetailsId,
} from "./moviesSlice";
import { getCredits, getMovieDetails } from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  resetFetchStatus,
  setImagesToLoad,
} from "../../pageStateSlice";
import { clearPeopleState } from "../people/peopleSlice";

function* fetchApiHandler({ payload: { pathName, id } }) {
  if (pathName !== "movies" || !id) return;
  console.log("SAGA details Movies");

  try {
    // yield put(fetchApi());
    yield put(clearMoviesState());
    yield put(clearPeopleState());

    // const id = yield select(selectMovieDetailsId);
    const movieDetails = yield call(() => getMovieDetails(id));
    if (!movieDetails) {
      throw new Error("Movie details not found");
    }
    const credits = yield call(() => getCredits(id));
    yield put(setMovieDetails(movieDetails));
    yield delay(1000);
    yield put(setCredits(credits));
    // if (movieDetails.backdrop_path) yield put(setImagesToLoad());   // wyłączenie tymczasowe
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);

  // yield takeLatest(setMovieDetailsId.type, fetchApiHandler);
}
