export const toMovieDetails = ({ id } = { id: ":id" }) =>
  `/movies/details/${id}`;
export const toPeopleDetails = ({ id } = { id: ":id" }) =>
  `/people/details/${id}`;

export const toMoviesList = ({ page } = { page: ":page" }) => `/movies/${page}`;
export const toPeopleList = ({ page } = { page: ":page" }) => `/people/${page}`;
