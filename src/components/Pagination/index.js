import { useSelector } from "react-redux";
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
  selectQuery,
} from "../../features/pageState/pageStateSlice";
import { StyledNavLink } from "./styled";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { searchInputParamName } from "../SearchInput/searchInputParamName";


export const Pagination = () => {
  const { page } = useParams();
  const firstMoviePage = useSelector(selectFirstMoviePage)
  const lastMoviePage = useSelector(selectLastMoviePage);
  const firstPeoplePage = useSelector(selectFirstPeoplePage)
  const lastPeoplePage = useSelector(selectLastPeoplePage);
  const firstSearchPage = useSelector(selectFirstSearchPage)
  const lastSearchPage = useSelector(selectLastSearchPage);
  let firstPage;
  let lastPage;
  let pageNumber = +page;
  const previousPage = pageNumber <= firstPage ? pageNumber : pageNumber - 1;
  const nextPage = pageNumber >= lastPage ? pageNumber : pageNumber + 1;
  const isFirstPage = pageNumber === firstPage ? true : false;
  const isLastPage = pageNumber === lastPage ? true : false;
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const query = new URLSearchParams(location.search).get(searchInputParamName);
  console.log("MoviesList - query", query)

  if (path === "movies") {
    firstPage = firstMoviePage;
    lastPage = lastMoviePage;
  };
  if (path === "people") {
    firstPage = firstPeoplePage;
    lastPage = lastPeoplePage;
  };
  if (query) {
    firstPage = firstSearchPage;
    lastPage = lastSearchPage;
  };

  const currentQuery = useSelector(selectQuery);
  const queryPath = currentQuery ? `?${searchInputParamName}=${currentQuery}` : ""

  // `/movies/${currentSearchPage}?${searchInputParamName}=${searchQuery}

  return (
    <Wrapper>
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