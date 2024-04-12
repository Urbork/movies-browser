export const toMoviesList = () => "/moviesList";
export const toPeopleList = () => "/peopleList";

export const toMovieDetails = ({ id } = { id: ":id" }) => `/moviesList/${id}`;
export const toPeopleDetails = ({ id } = { id: ":id" }) => `/peopleList/${id}`;