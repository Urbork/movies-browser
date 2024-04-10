import { useSelector } from "react-redux";
import {
  MoviesListSection,
  MoviesListTitle,
  MoviesListWrapper,
} from "./styled";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectPopularMovies } from "./moviesSlice";

export const MoviesList = () => {
  const popularMovies = useSelector(selectPopularMovies);
  const genres = useSelector(selectGenres);

  return (
    <MoviesListSection>
      <MoviesListTitle>Popular movies</MoviesListTitle>
      <MoviesListWrapper>
        {popularMovies?.map((movie) => (
          <MovieTile
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date.split("-")[0]}
            tags={movie.genre_ids?.map(
              (genreId) =>
                genres.find((item) => item.id === genreId)?.name
            )}
            rating={movie.vote_average}
            votes={movie.vote_count}
            id={movie.id}
          />
        ))}
      </MoviesListWrapper>
    </MoviesListSection>
  );
};
