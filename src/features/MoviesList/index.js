import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectMovies, selectMoviesTotalResults } from "../movies/moviesSlice";
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
  selectMoviesQueryToDisplay,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setMoviesQuery,
  setPeopleQueryToDisplay,
} from "../pageState/pageStateSlice";
import { NoResultsPage } from "../../components/NoResultsPage";
import { setPeopleTotalPages } from "../people/peopleSlice";

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
  const totalResults = useSelector(selectMoviesTotalResults);
  const moviesQueryToDisplay = useSelector(selectMoviesQueryToDisplay);

  useEffect(() => {
    if (fetchStatus === "ready") {
      if (
        (!query && page && pageNumber !== currentMoviePage)
        ||
        (query && page && pageNumber !== currentSearchPage)
        ||
        path !== "movies"
      ) {
        if (!query) {
          dispatch(setCurrentMoviePage(pageNumber))
        } else {
          if (query && query === moviesQuery) dispatch(setCurrentSearchPage(pageNumber))
        };
      };
    };
  }, [fetchStatus, query, page, pageNumber, currentMoviePage, currentSearchPage, path, moviesQuery, dispatch]);

  useEffect(() => {
    if (query && query !== moviesQuery) dispatch(setMoviesQuery(query));
    if (!query && query !== moviesQuery) dispatch(setMoviesQuery(null));

  }, [query, moviesQuery, dispatch])

  useEffect(() => {
    if (path === "movies") {
      dispatch(setPeopleQueryToDisplay(null));
      dispatch(setPeopleTotalPages(null))
    }

  }, [path, dispatch])

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage title={query && `Search results for “${query}” ${totalResults ? "(" + totalResults + ")" : ""}`} />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
        ((!!totalResults || totalResults > 0) || (!totalResults && !moviesQueryToDisplay)) ?
        <>
          <Section noDisplay={totalResults && !query}
            // show="true"
            title={moviesQueryToDisplay
              ?
              (`Search results for “${moviesQueryToDisplay}” ${totalResults ? "(" + totalResults + ")" : ""}`)
              :
              "Popular  movies"
            }
          >
            <MoviesListWrapper onLoad={() => dispatch(setImagesLoaded())}>
              {movies?.map((movie) => (
                <MovieTile
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  subtitle={movie.release_date.split("-")[0]}
                  tags={movie.genre_ids?.map((genreId) => genres.find((item) => item.id === genreId)?.name)}
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
        <NoResultsPage
          query={moviesQueryToDisplay}
          noDisplay={(!moviesQueryToDisplay || !moviesQuery || fetchStatus === "loading" || fetchStatus === "error")}
        />
      }
    </>
  );
};