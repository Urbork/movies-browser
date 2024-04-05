import { Button, ButtonContainer, Wrapper, Number, PageNumberInfo, BackwardArrow, ForwardArrow, Content, AdditionalBackwardArrow, AdditionalForwardArrow } from "./styled";

export const Pagination = ({ pages }) => (
  <Wrapper>
    <ButtonContainer>
      <Button disabled>
        <BackwardArrow disabled />
        <AdditionalBackwardArrow disabled />
        <Content>First</Content>
      </Button>
      <Button disabled>
        <BackwardArrow disabled />
        <Content>Previous</Content>
      </Button>
    </ButtonContainer>
    <PageNumberInfo>
      Page <Number>{pages.currentPage}</Number> of <Number>{pages.lastPage}</Number>
    </PageNumberInfo>
    <ButtonContainer>
      <Button>
        <Content>Next</Content>
        <ForwardArrow />
      </Button>
      <Button>
        <Content>Last</Content>
        <AdditionalForwardArrow />
        <ForwardArrow />
      </Button>
    </ButtonContainer>
  </Wrapper>
);