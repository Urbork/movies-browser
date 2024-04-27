import { all } from "redux-saga/effects";
import { initializeSaga } from "./features/movies/initializeSaga";
import { moviesSaga } from "./features/movies/moviesSaga";
import { peopleSaga } from "./features/people/peopleSaga";
import { movieDetailsSaga } from "./features/movies/movieDetailsSaga";
import { personSaga } from "./features/people/personSaga";

export default function* rootSaga() {
  yield all([
    initializeSaga(),
    moviesSaga(),
    movieDetailsSaga(),
    peopleSaga(),
    personSaga(),
  ]);
};