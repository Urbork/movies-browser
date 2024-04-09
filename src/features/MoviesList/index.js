import { useSelector } from "react-redux";
import {
  MoviesListSection,
  MoviesListTitle,
  MoviesListWrapper,
} from "./styled";
import { MovieTile } from "../../components/MovieTile";
import { selectPopularMovies } from "./moviesSlice";

export const MoviesList = ({ popularMovies___, genre, setMovieDetails }) => {
  const popularMovies = useSelector(selectPopularMovies);

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
