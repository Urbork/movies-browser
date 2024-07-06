import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
  },
  reducers: {
    setPeople: (state, { payload: people }) => {
      state.people = people;
    },
  },
});

export const { setPeople } = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;

export default peopleSlice.reducer;
