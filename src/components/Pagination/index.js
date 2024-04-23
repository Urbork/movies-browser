import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  ButtonContainer,
  Wrapper,
  Number,
  PageNumberInfo,
  BackwardArrow,
  ForwardArrow,
  Content,
  AdditionalBackwardArrow,
  AdditionalForwardArrow,
  StyledNavLink
} from "./styled";
import {
  changePageToFirst,
  changePageToLast,
  changePageToNext,
  changePageToPrevious,
  selectFirstPage,
  selectCurrentPage,
  selectLastPage,
  selectNextPage,
  selectPreviousPage,
} from "../../features/pageState/pageStateSlice";
import { toPage } from "../../routes";

export const Pagination = () => {
  const dispatch = useDispatch();
  const firstPage = useSelector(selectFirstPage);
  const previousPage = useSelector(selectPreviousPage);
  const currentPage = useSelector(selectCurrentPage);
  const nextPage = useSelector(selectNextPage);
  const lastPage = useSelector(selectLastPage);

  return (
    <Wrapper>
      <ButtonContainer>
        <StyledNavLink to={toPage({ page: firstPage })}>
          <Button /* onClick={() => dispatch(changePageToPrevious())} */ disabled={currentPage === firstPage}>
            <BackwardArrow disabled={currentPage === firstPage} />
            <AdditionalBackwardArrow disabled={currentPage === firstPage} />
            <Content disabled={currentPage === firstPage}>First</Content>
          </Button>
        </StyledNavLink>
        <StyledNavLink to={toPage({ page: previousPage })}>
          <Button /* onClick={() => dispatch(changePageToPrevious())} */ disabled={currentPage === firstPage}>
            <BackwardArrow disabled={currentPage === firstPage} />
            <Content disabled={currentPage === firstPage}>Previous</Content>
          </Button>
        </StyledNavLink>
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{currentPage}</Number> of <Number>{lastPage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <StyledNavLink to={toPage({ page: nextPage })}>
          <Button /* onClick={() => dispatch(changePageToNext())} */ disabled={currentPage === lastPage}>
            <Content disabled={currentPage === lastPage}>Next</Content>
            <ForwardArrow disabled={currentPage === lastPage} />
          </Button>
        </StyledNavLink>
        <StyledNavLink to={toPage({ page: lastPage })}>
          <Button /* onClick={() => dispatch(changePageToLast())} */ disabled={currentPage === lastPage}>
            <Content disabled={currentPage === lastPage}>Last</Content>
            <AdditionalForwardArrow disabled={currentPage === lastPage} />
            <ForwardArrow disabled={currentPage === lastPage} />
          </Button>
        </StyledNavLink>
      </ButtonContainer>
    </Wrapper>
  )
};