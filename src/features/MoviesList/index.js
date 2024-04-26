import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import {
  selectGenres,
  selectMovies,
} from "../movies/moviesSlice";
import {
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectFetchStatus,
  selectQuery,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setQuery,
} from "../pageState/pageStateSlice";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { LoadingPage } from "../../components/LoadingPage";
import { ErrorPage } from "../../components/ErrorPage";
import { Pagination } from "../../components/Pagination";
import { searchInputParamName } from "../../components/SearchInput/searchInputParamName";

export const MoviesList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchInputParamName);
  console.log("MoviesList - query", query)

  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const dispatch = useDispatch();
  const { page } = useParams();
  let pageNumber = +page;
  const path = location.pathname.split("/")[1];
  const fetchStatus = useSelector(selectFetchStatus);
  const currentSearchPage = useSelector(selectCurrentSearchPage);
  const currentQuery = useSelector(selectQuery);

  useEffect(() => {
    if (
      (page && pageNumber !== currentMoviePage) || path !== "movies" || (query && pageNumber !== currentSearchPage)
    ) {
      if (!query) {
        dispatch(setCurrentMoviePage(pageNumber))
      } else {
        dispatch(setCurrentSearchPage(pageNumber))
      }
    };
  }, [page, pageNumber, currentMoviePage, path, dispatch, query, currentQuery]);

  useEffect(() => {
    if (query && query !== currentQuery) dispatch(setQuery(query));
  }, [query])

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" && (
        <>
          <Section
            title={query ? `Search Results for "${query}"` : "Popular movies"}
          >
            <MoviesListWrapper onLoad={() => dispatch(setImagesLoaded())}>
              {movies?.map((movie) => (
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
          </Section>
          <Pagination />
        </>
      )}
    </>
  );
};