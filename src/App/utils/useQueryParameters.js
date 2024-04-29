import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { selectCurrentSearchPage } from "../pageStateSlice";

export const useQueryParameter = (target) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(target);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const currentSearchPage = useSelector(selectCurrentSearchPage);
  const pathName = location.pathname.split("/")[1];

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    };

    history.push(`/${pathName}/${currentSearchPage}?${searchParams.toString()}`);
  };
};