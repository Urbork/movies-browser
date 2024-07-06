import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: null,
  },
  reducers: {
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres.reduce(
        (acc, { id, name }) => ({
          ...acc,
          [id]: name,
        }),
        {}
      );
    },
  },
});

export const { setMovies, setGenres } = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;
