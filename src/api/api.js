export const url = "https://api.themoviedb.org/3/";
export const apiKey = "b4702788ab3957d3b4f7001b6ae9acd6";

// const page = "1";
const language = "language=en-US";
const movie_id = "337401";
const person_id = "122503"
const posterMobileSize = "w154";
const posterMainSize = "w342";
const backdropMobileSize = "w300";
const backdropMainSize = "original";
const profileSmallSize = "w185";
const profileMainSize = "h632";

export const parametrs = `?api_key=${apiKey}&${language}`

export const popularMoviesUrl = `${url}movie/popular?api_key=${apiKey}&page=`;
export const genreUrl = `${url}genre/movie/list?api_key=${apiKey}`;
export const movieDetailsUrl = `${url}movie/`;
export const creditsUrl = `${url}movie/${movie_id}/credits?api_key=${apiKey}`;


export const popularPeopleUrl = `${url}person/popular?api_key=${apiKey}`
export const personUrl = `${url}person/${person_id}?api_key=${apiKey}`;
export const movieCreditsUrl = `${url}person/${person_id}/movie_credits?api_key=${apiKey}`


export const posterMobileSizeUrl = `http://image.tmdb.org/t/p/${posterMobileSize}`;
export const posterMainSizeUrl = `http://image.tmdb.org/t/p/${posterMainSize}`;

export const backdropMobileSizeUrl = `http://image.tmdb.org/t/p/${backdropMobileSize}`;
export const backdropMainSizeUrl = `http://image.tmdb.org/t/p/${backdropMainSize}`;

export const profileSmallSizeUrl = `http://image.tmdb.org/t/p/${profileSmallSize}`;
export const profileMainSizeUrl = `http://image.tmdb.org/t/p/${profileMainSize}`;