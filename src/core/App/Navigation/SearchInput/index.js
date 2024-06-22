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

export const SearchInput = () => {
  const location = useLocation();
  const query = useQueryParameter(searchQueryParamName);
  const pathname = location.pathname.split("/")[1];
  const replaceQueryParameter = useReplaceQueryParameters();

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;

    replaceQueryParameter({
      [searchQueryParamName]: searchQuery,
      [searchPageParamName]: "",
    });
  };

  return (
    <Input
      type="text"
      placeholder={`Search for ${pathname}...`}
      value={query || ""}
      onChange={(event) => onInputChange(event)}
    />
  );
};
