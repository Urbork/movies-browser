import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/MoviesList/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})

export default store;