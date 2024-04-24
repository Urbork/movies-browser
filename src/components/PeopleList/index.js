import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularPeople } from "../../features/people/peopleSlice";
import { selectCurrentPeoplePage, selectFetchStatus, setCurrentPeoplePage, setImagesLoaded } from "../../features/pageState/pageStateSlice";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Pagination } from "../Pagination";
import { LoadingPage } from "../LoadingPage";
import { ErrorPage } from "../ErrorPage";

const PeopleList = () => {
  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPopularPeople);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const location = useLocation();
  const { page } = useParams();
  let pageNumber = +page;
  const path = location.pathname.split("/")[1];
  const fetchStatus = useSelector(selectFetchStatus);

  useEffect(() => {
    if ((page && pageNumber !== currentPeoplePage) || (path !== "people")) {
      dispatch(setCurrentPeoplePage(pageNumber));
    }
  }, [page, pageNumber, currentPeoplePage, path, dispatch]);

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
        <>
          <Section title="Popular people">
            <Wrapper onLoad={() => dispatch(setImagesLoaded())}>
              {popularPeople?.map((actor) => (
                <PeopleTile
                  key={actor.id}
                  id={actor.id}
                  profile={actor.profile_path}
                  name={actor.name}
                />
              ))}
            </Wrapper>
          </Section>
          <Pagination />
        </>
      }
    </>
  );
};

export default PeopleList;
