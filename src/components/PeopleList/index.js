import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { selectPeople, selectPeopleTotalResults } from "../../features/people/peopleSlice";
import { clearAfterSearch, selectCurrentPeoplePage, selectCurrentSearchPage, selectFetchStatus, selectFirstSearchPage, selectPeopleQuery, selectPeopleQueryToDisplay, setCurrentPeoplePage, setCurrentSearchPage, setImagesLoaded, setPeopleQuery } from "../../features/pageState/pageStateSlice";
import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Pagination } from "../Pagination";
import { LoadingPage } from "../LoadingPage";
import { ErrorPage } from "../ErrorPage";
import { searchInputParamName } from "../SearchInput/searchInputParamName";
import { NoResultsPage } from "../NoResultsPage";
import { clearMoviesAfterSearch } from "../../features/movies/moviesSlice";

const PeopleList = () => {
  const location = useLocation();
  const people = useSelector(selectPeople);
  const fetchStatus = useSelector(selectFetchStatus);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const currentSearchPage = useSelector(selectCurrentSearchPage);
  const peopleQuery = useSelector(selectPeopleQuery);
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search).get(searchInputParamName);
  const pathName = location.pathname.split("/")[1];
  const { page } = useParams();
  let pageNumber = +page;
  const totalResults = useSelector(selectPeopleTotalResults);
  const peopleQueryToDisplay = useSelector(selectPeopleQueryToDisplay);
  const firstSearchPage = useSelector(selectFirstSearchPage);
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (fetchStatus === "ready") {
      if (
        (!query && page && pageNumber !== currentPeoplePage)
        ||
        (query && page && pageNumber !== currentSearchPage)
        ||
        pathName !== "people"
      ) {
        if (!query) {
          dispatch(setCurrentPeoplePage(pageNumber))
        } else {
          if (peopleQuery !== peopleQueryToDisplay) {
            history.push(`/${pathName}/${firstSearchPage}?${searchParams.toString()}`)
            dispatch(setCurrentSearchPage(firstSearchPage));
          } else {
            dispatch(setCurrentSearchPage(pageNumber))
          }
        };
      };
    };
    // eslint-disable-next-line
  }, [fetchStatus, query, page, pageNumber, currentPeoplePage, currentSearchPage, pathName, peopleQuery, firstSearchPage, peopleQueryToDisplay, searchParams, history, dispatch]);

  useEffect(() => {
    if (query && query !== peopleQuery) dispatch(setPeopleQuery(query));
    if (!query && query !== peopleQuery) dispatch(setPeopleQuery(null));

  }, [query, peopleQuery, dispatch]);

  useEffect(() => {
    if (pathName === "people") {
      dispatch(clearAfterSearch());
      dispatch(clearMoviesAfterSearch());
    };

  }, [pathName, dispatch])

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage title={query && `Search results for “${query}” ${(totalResults && (peopleQueryToDisplay === peopleQuery)) ? "(" + totalResults + ")" : ""}`} />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
        ((!!totalResults || totalResults > 0) || (!totalResults && !peopleQueryToDisplay)) ?
        <>
          <Section
            noDisplay={totalResults && !query}
            title={peopleQueryToDisplay
              ?
              `Search results for “${peopleQueryToDisplay}” ${totalResults ? "(" + totalResults + ")" : ""}`
              :
              "Popular people"}
          >
            <Wrapper onLoad={() => dispatch(setImagesLoaded())}>
              {people?.map((person) => (
                <PeopleTile
                  key={person.id}
                  id={person.id}
                  profile={person.profile_path}
                  name={person.name}
                />
              ))}
            </Wrapper>
          </Section>
          <Pagination noDisplay={totalResults && !query} />
        </>
        :
        <NoResultsPage
          query={peopleQueryToDisplay}
          noDisplay={(!peopleQueryToDisplay || !peopleQuery || fetchStatus === "loading" || fetchStatus === "error")}
        />
      }
    </>
  );
};

export default PeopleList;
