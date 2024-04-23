import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectPopularMovies } from "../movies/moviesSlice";
import { selectCurrentMoviePage, setCurrentMoviePage, setImagesLoaded } from "../pageState/pageStateSlice";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

export const MoviesList = () => {
  const popularMovies = useSelector(selectPopularMovies);
  const genres = useSelector(selectGenres);
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const location = useLocation();
  const dispatch = useDispatch();
  const { page } = useParams();
  let pageNumber = +page;
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    if ((page && pageNumber !== currentMoviePage) || (path !== "movies")) {
      dispatch(setCurrentMoviePage(pageNumber));
    };
  }, [page, pageNumber, currentMoviePage, path, dispatch]);

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
