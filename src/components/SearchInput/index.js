import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "./useQueryParameters";
import { searchInputParamName } from "../SearchInput/searchInputParamName";
import { Input } from "./styled";
import {
  selectCurrentPeoplePage,
  selectCurrentMoviePage,
  setQuery,
  setCurrentMoviePage,
} from "../../features/pageState/pageStateSlice";

export const SearchInput = () => {
  const location = useLocation();
  const history = useHistory();
  const query = useQueryParameter(searchInputParamName);
  const isPeoplePage = location.pathname.includes("/people");
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const currentMoviesPage = useSelector(selectCurrentMoviePage);
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;

    replaceQueryParameter({
      key: "search",
      value: searchQuery.trim() !== "" ? searchQuery : "",
    });

    dispatch(setQuery(searchQuery.trim()));
    // console.log("searchQuery: " + searchQuery);

    if (isPeoplePage) {
      history.push(
        `/people/${currentPeoplePage}?${searchInputParamName}=${searchQuery}`
      );
    } else {
      history.push(
        `/movies/${currentMoviesPage}?${searchInputParamName}=${searchQuery}`
      );
    }
  };

  return (
    <Input
      type="text"
      placeholder={
        isPeoplePage ? "Search for people..." : "Search for movies..."
      }
      value={query || ""}
      onChange={(event) => onInputChange(event)}
    />
  );
};
