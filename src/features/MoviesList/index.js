import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectMovies, selectTotalResults, } from "../movies/moviesSlice";
import { useLocation, useParams, } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { LoadingPage } from "../../components/LoadingPage";
import { ErrorPage } from "../../components/ErrorPage";
import { Pagination } from "../../components/Pagination";
import { searchInputParamName } from "../../components/SearchInput/searchInputParamName";
import {
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectFetchStatus,
  selectMoviesQuery,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setMoviesQuery,
} from "../pageState/pageStateSlice";
import { NoResultsPage } from "../../components/NoResultsPage";

export const MoviesList = () => {
  const location = useLocation();
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const fetchStatus = useSelector(selectFetchStatus);
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentSearchPage = useSelector(selectCurrentSearchPage);
  const moviesQuery = useSelector(selectMoviesQuery);
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search).get(searchInputParamName);
  const path = location.pathname.split("/")[1];
  const { page } = useParams();
  let pageNumber = +page;
  const totalResults = useSelector(selectTotalResults);

  useEffect(() => {
    if (
      (!query && page && pageNumber !== currentMoviePage) ||
      (query && page && pageNumber !== currentSearchPage) ||
      path !== "movies"
    ) {
      if (!query) {
        dispatch(setCurrentMoviePage(pageNumber))
      } else {
        if (query && query === moviesQuery) {
          dispatch(setCurrentSearchPage(pageNumber))
        }
      };
    };
  }, [query, page, pageNumber, currentMoviePage, currentSearchPage, path, moviesQuery, dispatch]);

  useEffect(() => {
    if (query && query !== moviesQuery) dispatch(setMoviesQuery(query));
    if (!query && query !== moviesQuery) dispatch(setMoviesQuery(null));

  }, [query, moviesQuery, dispatch])

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage title={query && `Search results for “${query}”`} />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
        (totalResults || !query ?
          <>
            <Section noDisplay={totalResults && !query}
              title={query ? `Search results for “${query}” ${totalResults ?
                "(" + totalResults + ")" : ""}`
                :
                (totalResults ? "  " : "Popular movies")}
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
            <Pagination noDisplay={totalResults && !query} />
          </>
          :
          <NoResultsPage query={query} noDisplay={fetchStatus === "ready" && query} />
        )}
    </>
  );
};