import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    person: {
      credits: {},
    },
    total_pages: null,
    total_results: null,
  },
  reducers: {
    setPeople: (state, { payload: people }) => {
      state.people = people;
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
    setPeopleTotalPages: (state, { payload: pages }) => {
      state.total_pages = pages;
    },
    setPeopleTotalResults: (state, { payload: results }) => {
      state.total_results = results;
    },
    clearPeopleAfterSearch: (state) => {
      state.total_results = null;
      state.total_pages = null;
    },
  },
});

export const {
  setPeople,
  setPersonId,
  setPerson,
  setMovieCredits,
  setPeopleTotalPages,
  setPeopleTotalResults,
  clearPeopleAfterSearch,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPeople = state => selectPeopleState(state).people;
export const selectPerson = state => selectPeopleState(state).person;
export const selectPersonId = state => selectPerson(state).id;
export const selectPersonContent = state => selectPerson(state).content;
export const selectPersonMovieCredits = state => selectPerson(state).credits;
export const selectPersonDetailsCreditsCast = state => selectPersonMovieCredits(state).cast;
export const selectPersonDetailsCreditsCrew = state => selectPersonMovieCredits(state).crew;
export const selectPeopleTotalPages = (state) => selectPeopleState(state).total_pages;
export const selectPeopleTotalResults = (state) => selectPeopleState(state).total_results;

export default peopleSlice.reducer;