import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectPopularMovies } from "../movies/moviesSlice";
import { selectCurrentMoviePage, selectCurrentPage, setCurrentMoviePage, setCurrentPage, setImagesLoaded } from "../pageState/pageStateSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const MoviesList = () => {
  const popularMovies = useSelector(selectPopularMovies);
  const genres = useSelector(selectGenres);
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const dispatch = useDispatch();
  const { page } = useParams();
  let pageNumber = +page;

  if (pageNumber !== currentMoviePage) {
    dispatch(setCurrentMoviePage(pageNumber));
  }

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
