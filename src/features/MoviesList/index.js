import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import {
  selectGenres,
  selectPopularMovies,
  selectSearchResults,
} from "../movies/moviesSlice";
import { setImagesLoaded } from "../pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { searchInputParamName } from "../../components/SearchInput/searchInputParamName";

export const MoviesList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchInputParamName);

  const popularMovies = useSelector(selectPopularMovies);
  const searchResults = useSelector(selectSearchResults);
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  const displayData = query ? searchResults : popularMovies;

  return (
    <Section title={query ? `Search Results for "${query}"` : "Popular movies"}>
      <MoviesListWrapper onLoad={() => dispatch(setImagesLoaded())}>
        {displayData?.map((movie) => (
          <MovieTile
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date?.split("-")[0]}
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
