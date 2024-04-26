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
  selectCurrentSearchPage,
} from "../../features/pageState/pageStateSlice";

export const SearchInput = () => {
  const location = useLocation();
  const history = useHistory();
  const query = useQueryParameter(searchInputParamName);
  const isPeoplePage = location.pathname.includes("/people");  //do zmiany
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const currentMoviesPage = useSelector(selectCurrentMoviePage);
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();
  const currentSearchPage = useSelector(selectCurrentSearchPage);

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;
    console.log("onInputChange - searchQuery", searchQuery)

    replaceQueryParameter({
      key: "search",
      value: searchQuery.trim() !== "" ? searchQuery : "",
    });

    // dispatch(setQuery(searchQuery.trim()));
    dispatch(setQuery(searchQuery.trim()));

    console.log("SEARCH !!!!!!!!!!!!!!!!")

    // console.log("searchQuery: " + searchQuery);

    // if (isPeoplePage) {
    //   history.push(
    //     `/people/${currentPeoplePage}?${searchInputParamName}=${searchQuery}`
    //   );
    // } else {


    history.push(
      `/movies/${currentSearchPage}?${searchInputParamName}=${searchQuery}`
    );


    // }
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