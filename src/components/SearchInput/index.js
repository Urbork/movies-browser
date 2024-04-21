import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "./useQueryParameters";
import { searchMoviesAsync } from "../../features/movies/moviesSlice";
import { Input } from "./styled";

export const SearchInput = () => {
  const location = useLocation();
  const query = useQueryParameter("search");
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();
  const isMoviesList = location.pathname.includes("/moviesList");

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;

    replaceQueryParameter({
      key: "search",
      value: searchQuery.trim() !== "" ? searchQuery : "",
    });

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
