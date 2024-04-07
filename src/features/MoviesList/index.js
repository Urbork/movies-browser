import {
  MoviesListSection,
  MoviesListTitle,
  MoviesListWrapper,
} from "./styled";
import { MovieTile } from "../../components/MovieTile";

export const MoviesList = ({ popularMovies, genre, setMovieDetails }) => {

  return (
    <MoviesListSection>
      <MoviesListTitle>Popular movies</MoviesListTitle>
      <MoviesListWrapper>
        {popularMovies?.results?.map((movie) => (
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
            setMovieDetails={setMovieDetails}
            id={movie.id}
          />
        ))}
      </MoviesListWrapper>
    </MoviesListSection>
  );
};
