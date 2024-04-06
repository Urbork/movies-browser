import { useEffect, useState } from "react";
import {
  MoviesListSection,
  MoviesListTitle,
  MoviesListWrapper,
} from "./styled";
import { MovieTile } from "../../components/MovieTile";
import { getPopularMoviesApi, getGenre } from "../../api/fetchApi";

export const MoviesList = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [genre, setGenre] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const popularMovies = await getPopularMoviesApi();
      setPopularMovies(popularMovies);
      const genre = await getGenre();
      setGenre(genre);
    };

    fetchApi();
  }, []);

  return (
    <MoviesListSection>
      <MoviesListTitle>Popular movies</MoviesListTitle>
      <MoviesListWrapper>
        {popularMovies?.results.map((movie) => (
          <MovieTile
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date.split("-")[0]}
            tags={movie.genre_ids.map(
              (genreId) =>
                genre?.genres.find((item) => item.id === genreId).name
            )}
            rating={movie.vote_average}
            votes={movie.vote_count}
          />
        ))}
      </MoviesListWrapper>
    </MoviesListSection>
  );
};
