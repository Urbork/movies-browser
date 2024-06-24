import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (target) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(target);
};

export const useReplaceQueryParameters = () => {
  const location = useLocation();
  const history = useHistory();
  const pathName = location.pathname.split("/")[1];

  return (parameters) => {
    const searchParams = new URLSearchParams(location.search);

    for (const key in parameters) {
      const value = parameters[key];
      if (value.toString().trim() === "") {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    }

    history.push(`/${pathName}?${searchParams.toString()}`);
  };
};
