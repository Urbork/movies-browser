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
  selectFirstPage,
  selectLastMoviePage,
  selectLastPage,
} from "../../features/pageState/pageStateSlice";
import { StyledNavLink } from "./styled";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const Pagination = () => {
  const firstMoviePage = useSelector(selectFirstMoviePage)
  const lastMoviePage = useSelector(selectLastMoviePage);
  const { page } = useParams();

  let pageNumber = +page;
  const previousPage = pageNumber <= firstMoviePage ? pageNumber : pageNumber - 1;
  const nextPage = pageNumber >= lastMoviePage ? pageNumber : pageNumber + 1;
  const isFirstPage = pageNumber === firstMoviePage ? true : false;
  const isLastPage = pageNumber === lastMoviePage ? true : false;

  return (
    <Wrapper>
      <ButtonContainer>
        <StyledNavLink to={`/movies/page=${firstMoviePage}`} disabled={isFirstPage}>
          <BackwardArrow disabled={isFirstPage} />
          <AdditionalBackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>First</Content>
        </ StyledNavLink >
        <StyledNavLink to={`/movies/page=${previousPage}`} disabled={isFirstPage}>
          <BackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>Previous</Content>
        </ StyledNavLink >
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{pageNumber}</Number> of <Number>{lastMoviePage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <StyledNavLink to={`/movies/page=${nextPage}`} disabled={isLastPage}>
          <Content disabled={isLastPage}>Next</Content>
          <ForwardArrow disabled={isLastPage} />
        </ StyledNavLink >


        <StyledNavLink to={`/movies/page=${lastMoviePage}`} disabled={isLastPage}>
          <Content disabled={isLastPage}>Last</Content>
          <AdditionalForwardArrow disabled={isLastPage} />
          <ForwardArrow disabled={isLastPage} />
        </ StyledNavLink >

      </ButtonContainer>
    </Wrapper>
  )
};