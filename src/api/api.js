export const url = "https://api.themoviedb.org/3/";
export const apiKey = "b4702788ab3957d3b4f7001b6ae9acd6";
export const language = "en-US"
export const parameters = `api_key=${apiKey}&language=${language}`

export const popularMoviesUrl = `${url}movie/popular?${parameters}&page={page}`;
export const movieDetailsUrl = `${url}movie/{movie_id}?${parameters}`;
export const genreUrl = `${url}genre/movie/list?${parameters}`;
export const creditsUrl = `${url}movie/{movie_id}/credits?${parameters}`;
export const popularPeopleUrl = `${url}person/popular?${parameters}&page={page}`
export const personUrl = `${url}person/{person_id}?${parameters}`;
export const movieCreditsUrl = `${url}person/{person_id}/movie_credits?${parameters}`
export const searchMovieUrl = `${url}search/movie?query={query}&${parameters}&page={page}`
export const searchPersonUrl = `${url}search/person?query={query}&${parameters}&page={page}`

export const posterMobileSizeUrl = `https://image.tmdb.org/t/p/w154`;
export const posterMainSizeUrl = `https://image.tmdb.org/t/p/w342`;
export const backdropMobileSizeUrl = `https://image.tmdb.org/t/p/w300`;
export const backdropMainSizeUrl = `https://image.tmdb.org/t/p/w1280`;
export const profileSmallSizeUrl = `https://image.tmdb.org/t/p/w185`;
export const profileMainSizeUrl = `https://image.tmdb.org/t/p/h632`;

export const urlConfiguration = `${url}configuration`  // usunąć jeśli się nie przyda usunąć