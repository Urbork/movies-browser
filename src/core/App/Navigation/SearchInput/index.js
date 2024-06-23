import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  useQueryParameter,
  useReplaceQueryParameters,
} from "../../../../utils/queryParameters";
import {
  searchQueryParamName,
  searchPageParamName,
} from "../../../../utils/searchParamNames";
import { Input } from "./styled";
import { useSelector } from "react-redux";
import {
  selectCurrentMoviePage,
  selectCurrentPeoplePage,
} from "../../../../features/pageStateSlice";

export const SearchInput = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const replaceQueryParameter = useReplaceQueryParameters();
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const query = useQueryParameter(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;
    const currentPage = (() => {
      switch (pathname) {
        case "movies":
          return searchQuery ? "" : currentMoviePage;
        case "people":
          return searchQuery ? "" : currentPeoplePage;
        default:
          return "";
      }
    })();

    replaceQueryParameter({
      [searchQueryParamName]: searchQuery,
      [searchPageParamName]: currentPage,
    });
  };

  return (
    <Input
      type="text"
      placeholder={`Search for ${pathname}...`}
      value={query}
      onChange={(event) => onInputChange(event)}
    />
  );
};
