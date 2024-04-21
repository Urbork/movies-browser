import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    movieDetails: {},
    genres: [],
  },
  reducers: {
    setPopularMovies: (state, { payload: movies }) => {
      state.popularMovies = movies;
    },
    setMovieDetailsId: (state, { payload: id }) => {
      state.movieDetails.id = id;
    },
    setMovieDetails: (state, { payload: content }) => {
      state.movieDetails.content = content;
    },
    setCredits: (state, { payload: credits }) => {
      state.movieDetails.credits = credits;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const {
  setPopularMovies,
  setMovieDetailsId,
  setMovieDetails,
  setCredits,
  setGenres,
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies;

export const selectPopularMovies = state => selectMoviesState(state).popularMovies;
export const selectMovieDetails = state => selectMoviesState(state).movieDetails;
export const selectMovieDetailsId = state => selectMovieDetails(state).id;
export const selectMovieDetailsContent = state => selectMovieDetails(state).content;
export const selectMovieDetailsCredits = state => selectMovieDetails(state).credits;
export const selectGenres = state => selectMoviesState(state).genres;


export default moviesSlice.reducer;