import { Section } from "../../../components/Section";
import { MoviesWrapper } from "../../../components/MoviesWrapper";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../../components/MovieTile";
import { selectGenres, selectMovies } from "../moviesSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Pagination } from "../../../components/Pagination";
import {
  searchQueryParamName,
  searchPageParamName,
} from "../../../utils/searchParamNames";

import {
  fetchApi,
  selectQuery,
  selectShowContent,
  selectTotalResults,
  setShowContent,
} from "../../pageStateSlice";
import { useQueryParameter } from "../../../utils/queryParameters";
import { Page } from "../../../components/Page";

export const MoviesPage = () => {
  const location = useLocation();
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const storeQuery = useSelector(selectQuery);
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(searchPageParamName);
  const fullPathName = location.pathname;
  const totalResults = useSelector(selectTotalResults);
  const showContent = useSelector(selectShowContent);

  useEffect(() => {
    let lastQuery = query;
    const timeout = setTimeout(
      () => {
        if (lastQuery !== query) return;
        dispatch(fetchApi({ pathName: fullPathName, page: page || 1, query }));
      },
      !query || storeQuery === query ? 0 : 1000
    );

    return () => clearTimeout(timeout);

    // eslint-disable-next-line
  }, [query, page]);

  const onLoadHandler = () => {
    !showContent && dispatch(setShowContent());
  };

  return (
    <Page
      children={
        <>
          <Section
            show={storeQuery ? true : showContent}
            title={
              storeQuery
                ? `Search results for “${storeQuery}” ${
                    totalResults ? "(" + totalResults + ")" : ""
                  }`
                : "Popular  movies"
            }
          >
            <MoviesWrapper onLoad={onLoadHandler} $show={showContent}>
              {movies?.map((movie) => (
                <MovieTile
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  subtitle={movie.release_date.split("-")[0]}
                  tags={movie.genre_ids}
                  genres={genres}
                  rating={movie.vote_average}
                  votes={movie.vote_count}
                  id={movie.id}
                />
              ))}
            </MoviesWrapper>
          </Section>
          <Pagination />
        </>
      }
    />
  );
};
