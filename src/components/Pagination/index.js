import { useSelector, useDispatch } from "react-redux";
import { changePageToFirst, changePageToLast, changePageToNext, changePageToPrevious, selectCurrentPage, selectFirstPage, selectLastPage } from "../../features/MoviesList/moviesSlice";
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
  AdditionalForwardArrow
} from "./styled";

export const Pagination = () => {
  const firstPage = useSelector(selectFirstPage)
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectLastPage);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ButtonContainer>
        <Button onClick={() => dispatch(changePageToFirst())} disabled={currentPage === firstPage}>
          <BackwardArrow disabled={currentPage === firstPage} />
          <AdditionalBackwardArrow disabled={currentPage === firstPage} />
          <Content>First</Content>
        </Button>
        <Button onClick={() => dispatch(changePageToPrevious())} disabled={currentPage === firstPage}>
          <BackwardArrow disabled={currentPage === firstPage} />
          <Content>Previous</Content>
        </Button>
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{currentPage}</Number> of <Number>{lastPage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <Button onClick={() => dispatch(changePageToNext())} disabled={currentPage === lastPage}>
          <Content>Next</Content>
          <ForwardArrow disabled={currentPage === lastPage} />
        </Button>
        <Button onClick={() => dispatch(changePageToLast())} disabled={currentPage === lastPage}>
          <Content>Last</Content>
          <AdditionalForwardArrow disabled={currentPage === lastPage} />
          <ForwardArrow disabled={currentPage === lastPage} />
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
};