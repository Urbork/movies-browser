import { Section } from "../../../components/Section";
import { PeopleWrapper } from "../../../components/PeopleWrapper";
import PeopleTile from "../../../components/PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { selectPeople } from "../peopleSlice";
import {
  fetchApi,
  selectQuery,
  selectShowContent,
  selectTotalResults,
  setShowContent,
} from "../../pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Pagination } from "../../../components/Pagination";
import {
  searchQueryParamName,
  searchPageParamName,
} from "../../../utils/searchParamNames";
import { useQueryParameter } from "../../../utils/queryParameters";
import { Page } from "../../../components/Page";

export const PeoplePage = () => {
  const location = useLocation();
  const people = useSelector(selectPeople);
  const storeQuery = useSelector(selectQuery);
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(searchPageParamName);
  const fullPathName = location.pathname;
  const totalResults = useSelector(selectTotalResults);
  const showContent = useSelector(selectShowContent);

  useEffect(() => {
    dispatch(fetchApi({ pathName: fullPathName, page: page || 1, query }));
    // eslint-disable-next-line
  }, [query, page]);

  const onLoadHandler = () => {
    !showContent && dispatch(setShowContent());
  };

  return (
    <Page
      children={
        <>
          <Section
            show={storeQuery ? true : showContent}
            title={
              storeQuery
                ? `Search results for “${storeQuery}” ${
                    totalResults ? "(" + totalResults + ")" : ""
                  }`
                : "Popular people"
            }
          >
            <PeopleWrapper onLoad={onLoadHandler} $show={showContent}>
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
          <Pagination />
        </>
      }
    />
  );
};
