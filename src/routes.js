export const toPage = ({ page } = { page: ":page" }) => `/${page}`;

export const toMoviesList = () => `${toPage()}/movies`;
export const toPeopleList = () => `${toPage()}/people`;

export const toMovieDetails = ({ id } = { id: ":id" }) => `${toPage()}/movies/${id}`;
export const toPeopleDetails = ({ id } = { id: ":id" }) => `${toPage()}/people/${id}`;