import { useSelector } from "react-redux";
import { StyledNavLink } from "./styled";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { searchInputParamName } from "../SearchInput/searchInputParamName";
import {
  ButtonContainer,
  Wrapper,
  Number,
  PageNumberInfo,
  BackwardArrow,
  ForwardArrow,
  Content,
  AdditionalBackwardArrow,
  AdditionalForwardArrow
} from "./styled";
import {
  selectFirstMoviePage,
  selectFirstPeoplePage,
  selectFirstSearchPage,
  selectLastMoviePage,
  selectLastPeoplePage,
  selectLastSearchPage,
  selectMoviesQuery,
  selectMoviesQueryToDisplay,
  selectPeopleQuery,
  selectPeopleQueryToDisplay
} from "../../features/pageState/pageStateSlice";
import { selectMoviesTotalPages } from "../../features/movies/moviesSlice";
import { selectPeopleTotalPages } from "../../features/people/peopleSlice";

export const Pagination = ({ noDisplay }) => {
  const { page } = useParams();
  const firstMoviePage = useSelector(selectFirstMoviePage)
  const lastMoviePage = useSelector(selectLastMoviePage);
  const firstPeoplePage = useSelector(selectFirstPeoplePage)
  const lastPeoplePage = useSelector(selectLastPeoplePage);
  const firstSearchPage = useSelector(selectFirstSearchPage)
  const lastSearchPage = useSelector(selectLastSearchPage);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  let firstPage;
  let lastPage;
  let pageNumber = +page;
  const moviesTotalPages = useSelector(selectMoviesTotalPages);
  const peopleTotalPages = useSelector(selectPeopleTotalPages);
  const moviesQueryToDisplay = useSelector(selectMoviesQueryToDisplay)
  const PeopleQueryToDisplay = useSelector(selectPeopleQueryToDisplay)

  console.log("moviesQueryToDisplay", moviesQueryToDisplay)
  console.log("PeopleQueryToDisplay", PeopleQueryToDisplay)
  console.log("moviesTotalPages", moviesTotalPages)
  console.log("peopleTotalPages", peopleTotalPages)

  if (moviesQueryToDisplay || PeopleQueryToDisplay) {
    firstPage = firstSearchPage;
    if (path === "movies") {
      lastPage = moviesTotalPages ? moviesTotalPages : lastSearchPage;
    } else if (path === "people") {
      lastPage = peopleTotalPages ? peopleTotalPages : lastSearchPage;
    }
  } else {
    if (path === "movies") {
      firstPage = firstMoviePage;
      lastPage = lastMoviePage
    };
    if (path === "people") {
      firstPage = firstPeoplePage;
      lastPage = lastPeoplePage
    }
  }

  const previousPage = pageNumber <= firstPage ? pageNumber : pageNumber - 1;
  const nextPage = pageNumber >= lastPage ? pageNumber : pageNumber + 1;
  const isFirstPage = pageNumber === firstPage ? true : false;
  const isLastPage = pageNumber === lastPage ? true : false;
  const moviesQuery = useSelector(selectMoviesQuery);
  const peopleQuery = useSelector(selectPeopleQuery);

  let queryPath;
  if (moviesQuery && !peopleQuery) {
    queryPath = `?${searchInputParamName}=${moviesQuery}`;
  } else if (!moviesQuery && peopleQuery) {
    queryPath = `?${searchInputParamName}=${peopleQuery}`;
  } else {
    queryPath = "";
  }

  return (
    <Wrapper $noDisplay={noDisplay}>
      <ButtonContainer>
        <StyledNavLink to={`/${path}/${firstPage}${queryPath}`} disabled={isFirstPage}>
          <BackwardArrow disabled={isFirstPage} />
          <AdditionalBackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>First</Content>
        </ StyledNavLink >
        <StyledNavLink to={`/${path}/${previousPage}${queryPath}`} disabled={isFirstPage}>
          <BackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>Previous</Content>
        </ StyledNavLink >
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{pageNumber}</Number> of <Number>{lastPage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <StyledNavLink to={`/${path}/${nextPage}${queryPath}`} disabled={isLastPage}>
          <Content disabled={isLastPage}>Next</Content>
          <ForwardArrow disabled={isLastPage} />
        </ StyledNavLink >
        <StyledNavLink to={`/${path}/${lastPage}${queryPath}`} disabled={isLastPage}>
          <Content disabled={isLastPage}>Last</Content>
          <AdditionalForwardArrow disabled={isLastPage} />
          <ForwardArrow disabled={isLastPage} />
        </ StyledNavLink >
      </ButtonContainer>
    </Wrapper>
  )
};