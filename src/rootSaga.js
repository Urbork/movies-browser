import { all } from "redux-saga/effects";
import { initializeSaga } from "./features/MoviesList/initializeSaga";
import { moviesSaga } from "./features/MoviesList/moviesSaga";

export default function* rootSaga() {
  yield all([
    initializeSaga(),
    moviesSaga(),
  ]);
};