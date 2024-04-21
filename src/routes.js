export const toMoviesList = () => `/movies`;
export const toPeopleList = () => `/people`;

export const toMovieDetails = ({ id } = { id: ":id" }) => `/movies/id=${id}`;
export const toPeopleDetails = ({ id } = { id: ":id" }) => `/people/id=${id}`;