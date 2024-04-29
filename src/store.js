import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import pageStateReducer from "./App/pageStateSlice";
import moviesReducer from "./App/features/movies/moviesSlice";
import peopleSlice from "./App/features/people/peopleSlice"

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