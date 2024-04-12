import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectPopularMovies } from "../movies/moviesSlice";

export const MoviesList = () => {
  const popularMovies = useSelector(selectPopularMovies);
  const genres = useSelector(selectGenres);

  return (
    <Section title="Popular movies">
      <MoviesListWrapper>
        {popularMovies?.map((movie, index, array) => (
          <MovieTile
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date.split("-")[0]}
            tags={movie.genre_ids?.map(
              (genreId) => genres.find((item) => item.id === genreId)?.name
            )}
            rating={movie.vote_average}
            votes={movie.vote_count}
            id={movie.id}
            array={array}
            index={index}
          />
        ))}
      </MoviesListWrapper>
    </Section>
  );
};
