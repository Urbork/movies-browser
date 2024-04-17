export const toMoviesList = ({ page } = { page: ":page" }) => `/moviesList/${page}`;
export const toPeopleList = ({ page } = { page: ":page" }) => `/peopleList/${page}`;

export const toMovieDetails = ({ id } = { id: ":id" }) => `/moviesList/movieDetails/${id}`;
export const toPeopleDetails = ({ id } = { id: ":id" }) => `/peopleList/peopleDetails/${id}`;
/*
ścieżka /moviesList/movieDetails/... jest chwilowa. dałem w ten sposób, bo jeśli usunie się z niej movieDetails/
to strona automatycznie ładuje tylko szczegóły, a nie przechodzi wogóle do list. Możliwe że problem się
rozwiąże jak ogarniemy dodanie numeru strony do URLa, ale chwilowo mi to nie działa
*/
