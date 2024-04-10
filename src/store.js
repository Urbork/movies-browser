import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import pageStateReducer from "./features/pageState/pageStateSlice";
import moviesReducer from "./features/movies/moviesSlice";
import peopleSlice from "./features/people/peopleSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pageState: pageStateReducer,
    movies: moviesReducer,
    people: peopleSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;