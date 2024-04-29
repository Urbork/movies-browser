export const toMovieDetailsPage = ({ id } = { id: ":id" }) => `/movies/details/${id}`;
export const toPeopleDetailsPage = ({ id } = { id: ":id" }) => `/people/details/${id}`;

export const toMoviesPage = ({ page } = { page: ":page" }) => `/movies/${page}`;
export const toPeoplePage = ({ page } = { page: ":page" }) => `/people/${page}`;