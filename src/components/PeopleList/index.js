import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { selectPeople, selectTotalResults } from "../../features/people/peopleSlice";
import { selectCurrentPeoplePage, selectCurrentSearchPage, selectFetchStatus, selectPeopleQuery, setCurrentPeoplePage, setCurrentSearchPage, setImagesLoaded, setPeopleQuery } from "../../features/pageState/pageStateSlice";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Pagination } from "../Pagination";
import { LoadingPage } from "../LoadingPage";
import { ErrorPage } from "../ErrorPage";
import { searchInputParamName } from "../SearchInput/searchInputParamName";
import { NoResultsPage } from "../NoResultsPage";

const PeopleList = () => {
  const location = useLocation();
  const people = useSelector(selectPeople);
  const fetchStatus = useSelector(selectFetchStatus);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const currentSearchPage = useSelector(selectCurrentSearchPage);
  const peopleQuery = useSelector(selectPeopleQuery);
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search).get(searchInputParamName);
  const path = location.pathname.split("/")[1];
  const { page } = useParams();
  let pageNumber = +page;
  const totalResults = useSelector(selectTotalResults);


  useEffect(() => {
    if (
      (!query && page && pageNumber !== currentPeoplePage) ||
      (query && page && pageNumber !== currentSearchPage) ||
      path !== "people"
    ) {
      if (!query) {
        dispatch(setCurrentPeoplePage(pageNumber))
        console.log("setCurrentPeoplePage", pageNumber)

      } else {
        if (query && query === peopleQuery) {
          dispatch(setCurrentSearchPage(pageNumber))
          console.log("setCurrentSearchPage", pageNumber)

        }
      };
    };
  }, [query, page, pageNumber, currentPeoplePage, currentSearchPage, path, peopleQuery, dispatch]);

  useEffect(() => {
    if (query && query !== peopleQuery) dispatch(setPeopleQuery(query));
    if (!query && query !== peopleQuery) dispatch(setPeopleQuery(null));
    console.log("peopleQuery", peopleQuery)
  }, [query, peopleQuery, dispatch])

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage title={query && `Search results for “${query}”`} />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
        (totalResults || !query ?
          <>
            <Section noDisplay={totalResults && !query}
              title={query ? `Search results for “${query}” ${totalResults ? "(" + totalResults + ")" : ""}` : "Popular people"}
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
          <NoResultsPage query={query} noDisplay={fetchStatus === "ready" && query} />
        )
      }
    </>
  );
};

export default PeopleList;
