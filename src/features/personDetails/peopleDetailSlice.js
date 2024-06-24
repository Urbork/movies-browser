import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "personDetails",
  initialState: {
    content: null,
    credits: {},
  },
  reducers: {
    setPerson: (state, { payload: content }) => {
      state.content = content;
    },
    setMovieCredits: (state, { payload: credits }) => {
      state.credits = credits;
    },
  },
});

export const { setPerson, setMovieCredits } = peopleSlice.actions;

const selectPersonDetailsState = (state) => state.personDetails;
export const selectPersonContent = (state) =>
  selectPersonDetailsState(state).content;
export const selectPersonMovieCredits = (state) =>
  selectPersonDetailsState(state).credits;
export const selectPersonDetailsCreditsCast = (state) =>
  selectPersonMovieCredits(state).cast;
export const selectPersonDetailsCreditsCrew = (state) =>
  selectPersonMovieCredits(state).crew;

export default peopleSlice.reducer;
