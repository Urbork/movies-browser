import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/movies/moviesSaga";
import { peopleSaga } from "../features/people/peopleSaga";
import { movieDetailsSaga } from "../features/movieDetails/movieDetailsSaga";
import { personDetailsSaga } from "../features/personDetails/personDetailsSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    peopleSaga(),
    movieDetailsSaga(),
    personDetailsSaga(),
  ]);
}
