import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../utils/useQueryParameters";
import { searchInputParamName } from "../../../utils/searchParamNames";
import { Input } from "./styled";
import {
  fetchSearchApi,
  setMoviesQuery,
  setPeopleQuery,
} from "../../../pageStateSlice";

export const SearchInput = () => {
  const location = useLocation();
  const query = useQueryParameter(searchInputParamName);
  const pathname = location.pathname.split("/")[1];
  const replaceQueryParameter = useReplaceQueryParameter();
  const dispatch = useDispatch();

  // const onInputChange = ({ target }) => {
  //   const searchQuery = target.value;

  //   replaceQueryParameter({
  //     key: "search",
  //     value: searchQuery.trim() !== "" ? searchQuery : "",
  //   });

  //   if (searchOf === "movies") {
  //     dispatch(setMoviesQuery(searchQuery.trim()));
  //   } else if (searchOf === "people") {
  //     dispatch(setPeopleQuery(searchQuery.trim()));
  //   }
  // };

  const onInputChange = ({ target }) => {
    const searchQuery = target.value;

    replaceQueryParameter({
      key: searchInputParamName,
      value: searchQuery,
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
