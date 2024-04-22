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
  AdditionalForwardArrow
} from "./styled";
import {
  changePageToFirst,
  changePageToLast,
  changePageToNext,
  changePageToPrevious,
  selectFirstPage,
  selectCurrentPage,
  selectLastPage,
} from "../../features/pageState/pageStateSlice";
import { StyledNavLink } from "./styled";
import { toMoviesList } from "../../routes";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const Pagination = () => {
  const firstPage = useSelector(selectFirstPage)
  const lastPage = useSelector(selectLastPage);
  const { page } = useParams();

  let currentPage = +page;
  const previousPage = currentPage <= firstPage ? currentPage : currentPage - 1;
  const nextPage = currentPage >= lastPage ? currentPage : currentPage + 1;

  console.log("page", page);
  console.log("currentPage", currentPage)
  console.log("previousPage", previousPage)
  console.log("nextPage", nextPage)
  console.log("firstPage", firstPage)
  console.log("lastPage", lastPage)


  return (
    <Wrapper>
      <ButtonContainer>
        <StyledNavLink to={`/movies/page=${firstPage}`} disabled={currentPage === firstPage}>
          <BackwardArrow disabled={currentPage === firstPage} />
          <AdditionalBackwardArrow disabled={currentPage === firstPage} />
          <Content disabled={currentPage === firstPage}>First</Content>
        </ StyledNavLink >

        <StyledNavLink to={`/movies/page=${previousPage}`} disabled={currentPage === firstPage}>
          <BackwardArrow disabled={currentPage === firstPage} />
          <Content disabled={currentPage === firstPage}>Previous</Content>
        </ StyledNavLink >

      </ButtonContainer>

      <PageNumberInfo>
        Page <Number>{currentPage}</Number> of <Number>{lastPage}</Number>
      </PageNumberInfo>

      <ButtonContainer>
        <StyledNavLink to={`/movies/page=${nextPage}`} disabled={currentPage === lastPage}>

          <Content disabled={currentPage === lastPage}>Next</Content>
          <ForwardArrow disabled={currentPage === lastPage} />
        </ StyledNavLink >


        <StyledNavLink to={`/movies/page=${lastPage}`} disabled={currentPage === lastPage}>
          <Content disabled={currentPage === lastPage}>Last</Content>
          <AdditionalForwardArrow disabled={currentPage === lastPage} />
          <ForwardArrow disabled={currentPage === lastPage} />
        </ StyledNavLink >

      </ButtonContainer>
    </Wrapper>
  )
};