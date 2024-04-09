import { useSelector, useDispatch } from "react-redux";
import { changePageToFirst, changePageToLast, changePageToNext, changePageToPrevious, selectCurrentPage, selectPages } from "../../features/MoviesList/moviesSlice";
import { usePagination } from "./usePagination";
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

export const Pagination = ({ pages___, setPages }) => {
  const pages = useSelector(selectPages);
  const currPages = useSelector(selectCurrentPage);

  const dispatch = useDispatch();
  const {
    first,
    previous,
    next,
    last,
  } = usePagination(pages, setPages);
  const isFirst = pages.currentPage === pages.firstPage;
  const isLast = pages.currentPage === pages.lastPage;

  return (
    <Wrapper>
      <ButtonContainer>
        <Button onClick={() => dispatch(changePageToFirst())} disabled={isFirst}>
          <BackwardArrow disabled={isFirst} />
          <AdditionalBackwardArrow disabled={isFirst} />
          <Content>First</Content>
        </Button>
        <Button onClick={() => dispatch(changePageToPrevious())} disabled={isFirst}>
          <BackwardArrow disabled={isFirst} />
          <Content>Previous</Content>
        </Button>
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{pages.currentPage}</Number> of <Number>{pages.lastPage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <Button onClick={() => dispatch(changePageToNext())} disabled={isLast}>
          <Content>Next</Content>
          <ForwardArrow disabled={isLast} />
        </Button>
        <Button onClick={() => dispatch(changePageToLast())} disabled={isLast}>
          <Content>Last</Content>
          <AdditionalForwardArrow disabled={isLast} />
          <ForwardArrow disabled={isLast} />
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
};