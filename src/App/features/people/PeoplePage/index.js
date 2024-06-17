import { Section } from "../../../components/Section";
import { PeopleWrapper } from "../../../components/PeopleWrapper";
import PeopleTile from "../../../components/PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { selectPeople, selectPeopleTotalResults } from "../peopleSlice";
import {
  clearAfterSearch,
  fetchApi,
  fetchSearchApi,
  selectCurrentPeoplePage,
  selectCurrentSearchPage,
  selectFetchStatus,
  // selectFirstSearchPage,
  selectPeopleQuery,
  selectPeopleQueryToDisplay,
  setCurrentPeoplePage,
  setCurrentSearchPage,
  setImagesLoaded,
  setPeopleQuery,
} from "../../../pageStateSlice";
import {
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Pagination } from "../../../components/Pagination";
import { LoadingPage } from "../../../components/LoadingPage";
import { ErrorPage } from "../../../components/ErrorPage";
import {
  searchInputParamName,
  searchPageParamName,
} from "../../../utils/searchParamNames";
import { NoResultsPage } from "../../../components/NoResultsPage";
import { clearMoviesAfterSearch } from "../../movies/moviesSlice";

export const PeoplePage = () => {
  const location = useLocation();
  const people = useSelector(selectPeople);
  const fetchStatus = useSelector(selectFetchStatus);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const currentSearchPage = useSelector(selectCurrentSearchPage);
  const peopleQuery = useSelector(selectPeopleQuery);
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search).get(searchInputParamName);
  const page = new URLSearchParams(location.search).get(searchPageParamName);

  const pathName = location.pathname;
  // const { page } = useParams();
  // let pageNumber = +page;
  const totalResults = useSelector(selectPeopleTotalResults);
  const peopleQueryToDisplay = useSelector(selectPeopleQueryToDisplay);
  // const firstSearchPage = useSelector(selectFirstSearchPage);
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchApi({ pathName, page: page || 1, query }));
    } else {
      dispatch(fetchApi({ pathName, page: page || 1 }));
    }

    if (fetchStatus === "ready") {
      // if (
      //   (!query && page && pageNumber !== currentPeoplePage) ||
      //   (query && page && pageNumber !== currentSearchPage) ||
      //   pathName !== "people"
      // ) {
      //   if (!query) {
      //     dispatch(setCurrentPeoplePage(pageNumber));
      //   } else {
      //     if (peopleQuery !== peopleQueryToDisplay) {
      //       history.push(
      //         `/${pathName}/${firstSearchPage}?${searchParams.toString()}`
      //       );
      //     } else {
      //       dispatch(setCurrentSearchPage(pageNumber));
      //     }
      //   }
      // }
    }

    // eslint-disable-next-line
  }, [
    // fetchStatus,
    // query,
    page,
    // pageNumber,
    // currentPeoplePage,
    // currentSearchPage,
    // pathName,
    // peopleQuery,
    // peopleQueryToDisplay,
  ]);

  useEffect(() => {
    // if (query && query !== peopleQuery) dispatch(setPeopleQuery(query));
    // if (!query && query !== peopleQuery) dispatch(setPeopleQuery(null));
  }, [query, peopleQuery]);

  useEffect(() => {
    if (pathName === "people") {
      // dispatch(clearAfterSearch());
      // dispatch(clearMoviesAfterSearch());
    }

    // eslint-disable-next-line
  }, [pathName]);

  return (
    <>
      {fetchStatus === "loading" && (
        <LoadingPage
          title={
            query &&
            `Search results for “${query}” ${
              totalResults && peopleQueryToDisplay === peopleQuery
                ? "(" + totalResults + ")"
                : ""
            }`
          }
        />
      )}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
      (!!totalResults ||
        totalResults > 0 ||
        (!totalResults && !peopleQueryToDisplay)) ? (
        <>
          <Section
            noDisplay={totalResults && !query}
            title={
              peopleQueryToDisplay
                ? `Search results for “${peopleQueryToDisplay}” ${
                    totalResults ? "(" + totalResults + ")" : ""
                  }`
                : "Popular people"
            }
          >
            <PeopleWrapper
            //  onLoad={() => dispatch(setImagesLoaded())}  // wyłączenie tymczasowe
            >
              {people?.map((person) => (
                <PeopleTile
                  key={person.id}
                  id={person.id}
                  profile={person.profile_path}
                  name={person.name}
                />
              ))}
            </PeopleWrapper>
          </Section>
          <Pagination noDisplay={totalResults && !query} />
        </>
      ) : (
        <NoResultsPage
          query={peopleQueryToDisplay}
          noDisplay={
            !peopleQueryToDisplay ||
            !peopleQuery ||
            fetchStatus === "loading" ||
            fetchStatus === "error"
          }
        />
      )}
    </>
  );
};
