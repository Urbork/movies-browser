import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    popularPeople: [],
    person: {},
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
  },
});

export const {
  setPopularPeople,
  setPersonId,
  setPerson,
  setMovieCredits,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPopularPeople = state => selectPeopleState(state).popularPeople;
export const selectPerson = state => selectPeopleState(state).person;
export const selectPersonId = state => selectPerson(state).id
export const selectPersonContent = state => selectPerson(state).content
export const selectPersonMovieCredits = state => selectPerson(state).movieCredits

export default peopleSlice.reducer;