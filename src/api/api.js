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
export const creditsUrl = `/credits`;

export const popularPeopleUrl = `${url}person/popular?api_key=${apiKey}`
export const personUrl = `${url}person/${person_id}?api_key=${apiKey}`;
export const movieCreditsUrl = `${url}person/${person_id}/movie_credits?api_key=${apiKey}`

export const posterMobileSizeUrl = `http://image.tmdb.org/t/p/${posterMobileSize}`;
export const posterMainSizeUrl = `http://image.tmdb.org/t/p/${posterMainSize}`;

export const backdropMobileSizeUrl = `http://image.tmdb.org/t/p/${backdropMobileSize}`;
export const backdropMainSizeUrl = `http://image.tmdb.org/t/p/${backdropMainSize}`;

export const profileSmallSizeUrl = `http://image.tmdb.org/t/p/${profileSmallSize}`;
export const profileMainSizeUrl = `http://image.tmdb.org/t/p/${profileMainSize}`;

// Nowa wersja:
// export const url = "https://api.themoviedb.org/3/";
// export const apiKey = "b4702788ab3957d3b4f7001b6ae9acd6";

// export const urlImagesBase = "http://image.tmdb.org/t/p/";
// export const urlImagesSecureBase = "https://image.tmdb.org/t/p/";  // sprawdzić

// const currentPage = 1;
// const page = `page=${currentPage}`;
// const language = "language=en-US";
// const movie_id = "337401";
// const person_id = "155522"
// const posterMobileSize = "w154";
// const posterMainSize = "w342";
// const backdropMobileSize = "w300";
// const backdropMainSize = "original";
// const profileSmallSize = "w185";
// const profileMainSize = "h632";
// const parameters = `api_key=${apiKey}&${language}`
// const searchQuery = ""
// const query = `query=${searchQuery}`

// // https://api.themoviedb.org/3/movie/popular
// export const urlPopularMovies = `${url}movie/popular?${parameters}&${page}`;

// // https://api.themoviedb.org/3/movie/{movie_id}
// export const urlMovieDetails = `${url}movie/${movie_id}?${parameters}`;

// // https://api.themoviedb.org/3/movie/{movie_id}/credits
// export const urlCredits = `${url}movie/${movie_id}/credits?${parameters}`;

// // https://api.themoviedb.org/3/person/popular
// export const urlPopularPeople = `${url}person/popular?${parameters}&${page}`

// // https://api.themoviedb.org/3/person/{person_id}
// export const urlPerson = `${url}person/${person_id}?${parameters}`;

// // https://api.themoviedb.org/3/person/{person_id}/movie_credits
// export const urlMovieCredits = `${url}person/${person_id}/movie_credits?${parameters}`

// // https://api.themoviedb.org/3/search/movie
// export const urlSearchMovie = `${url}search/movie?${query}&${parameters}&${page}`

// // https://api.themoviedb.org/3/search/person
// export const urlSearchPerson = `${url}search/person?${query}&${parameters}&${page}`

// // https://api.themoviedb.org/3/genre/movie/list
// export const urlGenres = `${url}genre/movie/list?${parameters}`;

// // https://api.themoviedb.org/3/configuration
// export const urlConfiguration = `${url}configuration`

// export const posterMobileSizeUrl = `${urlImagesBase}${posterMobileSize}`;
// export const posterMainSizeUrl = `${urlImagesBase}${posterMainSize}`;

// export const backdropMobileSizeUrl = `${urlImagesBase}${backdropMobileSize}`;
// export const backdropMainSizeUrl = `${urlImagesBase}${backdropMainSize}`;

// export const profileSmallSizeUrl = `${urlImagesBase}${profileSmallSize}`;
// export const profileMainSizeUrl = `${urlImagesBase}${profileMainSize}`;