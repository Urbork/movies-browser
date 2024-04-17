import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import {
  selectGenres,
  selectMoviesByQuery,
  selectPopularMovies,
} from "../movies/moviesSlice";
import { setImagesLoaded } from "../pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const MoviesList = () => {
  // TESTY
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");
  // KONIEC TESTÓW

  const popularMovies = useSelector((state) =>
    selectMoviesByQuery(state, query)
  );
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  return (
    <Section title="Popular movies">
      <MoviesListWrapper onLoad={() => dispatch(setImagesLoaded())}>
        {popularMovies?.map((movie) => (
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
          />
        ))}
      </MoviesListWrapper>
    </Section>
  );
};
