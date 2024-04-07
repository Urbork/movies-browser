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

export const Pagination = ({ pages, setPages }) => {
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
        <Button onClick={first} disabled={isFirst}>
          <BackwardArrow disabled={isFirst} />
          <AdditionalBackwardArrow disabled={isFirst} />
          <Content>First</Content>
        </Button>
        <Button onClick={previous} disabled={isFirst}>
          <BackwardArrow disabled={isFirst} />
          <Content>Previous</Content>
        </Button>
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{pages.currentPage}</Number> of <Number>{pages.lastPage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <Button onClick={next} disabled={isLast}>
          <Content>Next</Content>
          <ForwardArrow disabled={isLast} />
        </Button>
        <Button onClick={last} disabled={isLast}>
          <Content>Last</Content>
          <AdditionalForwardArrow disabled={isLast} />
          <ForwardArrow disabled={isLast} />
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
};