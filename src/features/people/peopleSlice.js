import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    popularPeople: [],
    person: {
      credits: {},
    },
    searchPerson: [],
  },
  reducers: {
    setPopularPeople: (state, { payload: people }) => {
      state.popularPeople = people;
    },
    setPersonId: (state, { payload: id }) => {
      state.person.id = id;
    },
    setPerson: (state, { payload: content }) => {
      state.person.content = content;
    },
    setMovieCredits: (state, { payload: credits }) => {
      state.person.credits = credits;
    },
    setSearchPerson: (state, { payload: search }) => {
      state.searchPerson = search;
    },
  },
});

export const {
  setPopularPeople,
  setPersonId,
  setPerson,
  setMovieCredits,
  setSearchPerson,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPopularPeople = (state) =>
  selectPeopleState(state).popularPeople;
export const selectPerson = (state) => selectPeopleState(state).person;
export const selectPersonId = (state) => selectPerson(state).id;
export const selectPersonContent = (state) => selectPerson(state).content;
export const selectPersonMovieCredits = (state) => selectPerson(state).credits;
export const selectPersonDetailsCreditsCast = (state) =>
  selectPersonMovieCredits(state).cast;
export const selectPersonDetailsCreditsCrew = (state) =>
  selectPersonMovieCredits(state).crew;
export const selectSearchPerson = (state) =>
  selectPeopleState(state).searchPerson;

export default peopleSlice.reducer;
