import { useSelector } from "react-redux";
import { selectFetchStatus, selectQuery } from "../../features/pageStateSlice";
import { searchQueryParamName } from "../../utils/searchParamNames";
import { ErrorPage } from "./ErrorPage";
import { LoadingPage } from "./LoadingPage";
import { NoResultsPage } from "./NoResultsPage";
import { useQueryParameter } from "../../utils/queryParameters";

export const Page = ({ children }) => {
  const fetchStatus = useSelector(selectFetchStatus);
  const query = useQueryParameter(searchQueryParamName);
  const storeQuery = useSelector(selectQuery);
  return (
    <>
      {fetchStatus === "loading" && (
        <LoadingPage title={query && `Search results for “${query}”`} />
      )}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "noResults" && (
        <NoResultsPage query={storeQuery} show={true} />
      )}
      {fetchStatus === "ready" && <>{children}</>}
    </>
  );
};
