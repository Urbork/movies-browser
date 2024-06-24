import { useSelector } from "react-redux";
import { StyledNavLink } from "./styled";
import {
  ButtonContainer,
  Wrapper,
  Number,
  PageNumberInfo,
  BackwardArrow,
  ForwardArrow,
  Content,
  AdditionalBackwardArrow,
  AdditionalForwardArrow,
} from "./styled";
import {
  selectCurrentMoviePage,
  selectCurrentPeoplePage,
  selectCurrentSearchPage,
  selectLastMoviePage,
  selectLastPeoplePage,
  selectLastSearchPage,
  selectQuery,
} from "../../features/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toPage } from "../../utils/routes";

export const Pagination = () => {
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const lastMoviePage = useSelector(selectLastMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const lastPeoplePage = useSelector(selectLastPeoplePage);
  const currentSearchPage = useSelector(selectCurrentSearchPage);
  const lastSearchPage = useSelector(selectLastSearchPage);
  const storeQuery = useSelector(selectQuery);
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const fullPathName = location.pathname;
  const search = location.search;
  let currentPage;
  let lastPage;

  switch (pathName) {
    case "movies":
      currentPage = storeQuery ? currentSearchPage : currentMoviePage;
      lastPage = storeQuery ? lastSearchPage : lastMoviePage;
      break;
    case "people":
      currentPage = storeQuery ? currentSearchPage : currentPeoplePage;
      lastPage = storeQuery ? lastSearchPage : lastPeoplePage;
      break;
    default:
      return null;
  }
  let nextPage = currentPage >= lastPage ? currentPage : currentPage + 1;
  let previousPage = currentPage <= 1 ? 1 : currentPage - 1;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  return (
    <Wrapper>
      <ButtonContainer>
        <StyledNavLink
          to={toPage({ pathname: fullPathName, page: 1, search })}
          disabled={isFirstPage}
        >
          <BackwardArrow disabled={isFirstPage} />
          <AdditionalBackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>First</Content>
        </StyledNavLink>
        <StyledNavLink
          to={toPage({ pathname: fullPathName, page: previousPage, search })}
          disabled={isFirstPage}
        >
          <BackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>Previous</Content>
        </StyledNavLink>
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{currentPage}</Number> of <Number>{lastPage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <StyledNavLink
          to={toPage({ pathname: fullPathName, page: nextPage, search })}
          disabled={isLastPage}
        >
          <Content disabled={isLastPage}>Next</Content>
          <ForwardArrow disabled={isLastPage} />
        </StyledNavLink>
        <StyledNavLink
          to={toPage({ pathname: fullPathName, page: lastPage, search })}
          disabled={isLastPage}
        >
          <Content disabled={isLastPage}>Last</Content>
          <AdditionalForwardArrow disabled={isLastPage} />
          <ForwardArrow disabled={isLastPage} />
        </StyledNavLink>
      </ButtonContainer>
    </Wrapper>
  );
};
