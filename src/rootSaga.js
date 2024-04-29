import { all } from "redux-saga/effects";
import { initializeSaga } from "./App/initializeSaga";
import { moviesSaga } from "./App/features/movies/moviesSaga";
import { peopleSaga } from "./App/features/people/peopleSaga";
import { movieDetailsSaga } from "./App/features/movies/movieDetailsSaga";
import { personSaga } from "./App/features/people/personSaga";

export default function* rootSaga() {
  yield all([
    initializeSaga(),
    moviesSaga(),
    movieDetailsSaga(),
    peopleSaga(),
    personSaga(),
  ]);
};