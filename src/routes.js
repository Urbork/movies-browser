export const toMoviesList = ({ page } = { page: ":page" }) =>
  `/moviesList/${page}`;
export const toPeopleList = ({ page } = { page: ":page" }) =>
  `/peopleList/${page}`;

export const toMovieDetails = ({ id } = { id: ":id" }) =>
  `/moviesList/movieDetails/${id}`;
export const toPeopleDetails = ({ id } = { id: ":id" }) =>
  `/peopleList/peopleDetails/${id}`;
