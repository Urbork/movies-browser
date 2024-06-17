import { buildQueryString } from "./utils/buildQueryString";

export const toMovieDetailsPage = ({ id } = { id: ":id" }) =>
  `/movies/details/${id}`;
export const toPeopleDetailsPage = ({ id } = { id: ":id" }) =>
  `/people/details/${id}`;
export const toMoviesPage = ({ page } = { page: 1 }) =>
  page === 1 ? "/movies" : `/movies?${buildQueryString({ page })}`;
export const toPeoplePage = ({ page } = { page: 1 }) =>
  page === 1 ? "/people" : `/people?${buildQueryString({ page })}`;
