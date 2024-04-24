import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "./useQueryParameters";
import { searchInputParamName } from "../SearchInput/searchInputParamName";
import { Input } from "./styled";
import { setQuery } from "../../features/pageState/pageStateSlice";

export const SearchInput = () => {
  const location = useLocation();
  const history = useHistory();
  const query = useQueryParameter(searchInputParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();
  const isMoviesList = location.pathname.includes("/movies");

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;

    replaceQueryParameter({
      key: "search",
      value: searchQuery.trim() !== "" ? searchQuery : "",
    });

    dispatch(setQuery(searchQuery.trim()));

    if (isMoviesList) {
      history.push(`/movies?${searchInputParamName}=${searchQuery}`);
    } else {
      history.push(`/people?${searchInputParamName}=${searchQuery}`);
    }
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
