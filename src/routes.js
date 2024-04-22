// export const toMoviesList = () => `/movies`;
// export const toPeopleList = () => `/people`;

export const toMovieDetails = ({ id } = { id: ":id" }) => `/moviesDetails/id=${id}`;
export const toPeopleDetails = ({ id } = { id: ":id" }) => `/peopleDetails/id=${id}`;

export const toMoviesList = ({ page } = { page: ":page" }) => `/movies/page=${page}`;
export const toPeopleList = ({ page } = { page: ":page" }) => `/people/page=${page}`;