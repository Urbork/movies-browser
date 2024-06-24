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
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentMoviePage,
  selectCurrentPeoplePage,
} from "../../../../features/pageStateSlice";

export const SearchInput = () => {
  const location = useLocation();
  const query = useQueryParameter(searchQueryParamName);
  const [queryState, setQueryState] = useState(query || "");
  const timeoutRef = useRef(null);
  const replaceQueryParameter = useReplaceQueryParameters();
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const pathname = location.pathname.split("/")[1];

  const currentPage = (() => {
    switch (pathname) {
      case "movies":
        return currentMoviePage;
      case "people":
        return currentPeoplePage;
      default:
        return "";
    }
  })();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (query !== queryState) {
        replaceQueryParameter({
          [searchQueryParamName]: queryState,
          [searchPageParamName]: queryState ? "" : currentPage,
        });
      }
    }, 1000);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [queryState]);

  useEffect(() => {
    setQueryState(query);
  }, [query]);

  return (
    <Input
      type="text"
      placeholder={`Search for ${pathname}...`}
      value={queryState || ""}
      onChange={({ target }) => setQueryState(target.value)}
    />
  );
};
