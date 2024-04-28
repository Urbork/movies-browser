import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectMovies, selectMoviesTotalResults } from "../movies/moviesSlice";
import { useHistory, useLocation, useParams, } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { LoadingPage } from "../../components/LoadingPage";
import { ErrorPage } from "../../components/ErrorPage";
import { Pagination } from "../../components/Pagination";
import { searchInputParamName } from "../../components/SearchInput/searchInputParamName";
import {
  clearAfterSearch,
  selectCurrentMoviePage,
  selectCurrentSearchPage,
  selectFetchStatus,
  selectFirstSearchPage,
  selectMoviesQuery,
  selectMoviesQueryToDisplay,
  setCurrentMoviePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setMoviesQuery,
} from "../pageState/pageStateSlice";
import { NoResultsPage } from "../../components/NoResultsPage";
import { clearPeopleAfterSearch } from "../people/peopleSlice";

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
  const pathName = location.pathname.split("/")[1];
  const { page } = useParams();
  let pageNumber = +page;
  const totalResults = useSelector(selectMoviesTotalResults);
  const moviesQueryToDisplay = useSelector(selectMoviesQueryToDisplay);
  const firstSearchPage = useSelector(selectFirstSearchPage);
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (fetchStatus === "ready") {
      if (
        (!query && page && pageNumber !== currentMoviePage)
        ||
        (query && page && pageNumber !== currentSearchPage)
        ||
        pathName !== "movies"
      ) {
        if (!query) {
          dispatch(setCurrentMoviePage(pageNumber))
        } else {
          if (moviesQuery !== moviesQueryToDisplay) {
            history.push(`/${pathName}/${firstSearchPage}?${searchParams.toString()}`)
            dispatch(setCurrentSearchPage(firstSearchPage));
          } else {
            dispatch(setCurrentSearchPage(pageNumber))
          }
        };
      };
    };
    // eslint-disable-next-line
  }, [fetchStatus, query, page, pageNumber, currentMoviePage, currentSearchPage, pathName, moviesQuery, dispatch, history, firstSearchPage, moviesQueryToDisplay, searchParams]);

  useEffect(() => {
    if (query && query !== moviesQuery) dispatch(setMoviesQuery(query));
    if (!query && query !== moviesQuery) dispatch(setMoviesQuery(null));

  }, [query, moviesQuery, dispatch])

  useEffect(() => {
    if (pathName === "movies") {
      dispatch(clearAfterSearch());
      dispatch(clearPeopleAfterSearch());
    };

  }, [pathName, dispatch])

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage title={query && `Search results for “${query}” ${(totalResults && (moviesQueryToDisplay === moviesQuery)) ? "(" + totalResults + ")" : ""}`} />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
        ((!!totalResults || totalResults > 0) || (!totalResults && !moviesQueryToDisplay)) ?
        <>
          <Section noDisplay={totalResults && !query}
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