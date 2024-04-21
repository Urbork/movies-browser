import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "./useQueryParameters";
import { searchInputParamName } from "../SearchInput/searchInputParamName";
import { searchMoviesAsync } from "../../features/movies/moviesSlice";
import { Input } from "./styled";
import { useEffect } from "react";
import {
  changePageToFirst,
  setQuery,
} from "../../features/pageState/pageStateSlice";

export const SearchInput = () => {
  const location = useLocation();
  const query = useQueryParameter(searchInputParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();
  const isMoviesList = location.pathname.includes("/movies");

  useEffect(() => {
    dispatch(changePageToFirst());
  }, [query, dispatch]);

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;

    replaceQueryParameter({
      key: "search",
      value: searchQuery.trim() !== "" ? searchQuery : "",
    });

    dispatch(setQuery(searchQuery.trim()));
    dispatch(searchMoviesAsync(searchQuery.trim(), 1));
  };

  return (
    <Input
      type="text"
      placeholder={
        isMoviesList ? "Search for movies..." : "Search for people..."
      }
      value={query || ""}
      onChange={(event) => onInputChange(event)}
    />
  );
};
