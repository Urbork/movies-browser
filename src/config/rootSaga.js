import { all } from "redux-saga/effects";
import { moviesSaga } from "../app/features/movies/moviesSaga";
import { peopleSaga } from "../app/features/people/peopleSaga";
import { movieDetailsSaga } from "../app/features/movies/movieDetailsSaga";
import { personSaga } from "../app/features/people/personSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), movieDetailsSaga(), peopleSaga(), personSaga()]);
}
