import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  StyledNavLink,
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
import { changePageToFirst, changePageToLast, changePageToNext, changePageToPrevious, selectCurrentPage, selectFirstPage, selectLastPage } from "../../features/pageState/pageStateSlice";
import { toMoviesList } from "../../routes";

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
        <StyledNavLink to={toMoviesList({ lastPage })}>
          <Button onClick={() => dispatch(changePageToLast())} disabled={currentPage === lastPage}>
            <Content>Last</Content>
            <AdditionalForwardArrow disabled={currentPage === lastPage} />
            <ForwardArrow disabled={currentPage === lastPage} />
          </Button>
        </StyledNavLink>
        { /*
          Powyżej NavLink dodany tylko dla jednego przycisku, próbowałem na wszystkich, 
          ale i tak nie działa.
          Ogólnie zamiar był taki: tutaj, po kliknięciu w przycisk paginacji, powinien dodawać się
          numer strony do URLa i jak już byśmy to mieli, to na podstawie nowego URLa w komponentach
          takich jak MoviesList czy PeopleList użylibyśmy useParams() który będzie odczytywał
          numer strony, przekazywał ten numer do poprzez dispatch do recudera setCurrentPage()
          (znajduje się w PageStateSlice), i już na tej podstawie generowałaby się lista filmów
          lub aktorów dla podanej strony.
          Wtedy tutaj, w paginacji, możnaby usunąć dispatche które zmieniają stan currentPage.
          Niestety ciągle mam problem z tym, że po wciśnięciu przycisku z paginacji, nie jest
          przekazywany numer strony, lecz undefined.
        */}
      </ButtonContainer>
    </Wrapper>
  )
};