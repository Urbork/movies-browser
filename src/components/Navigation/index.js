import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  Logo,
  Video,
  InputWrapper,
  Input,
  ButtonsWrapper,
  StyledNavLink,
} from "./styled";
import { toMoviesList, toPeopleList } from "../../routes";
import { moviesDisplay, peopleDisplay, selectCurrentMoviePage, selectCurrentPage, selectCurrentPeoplePage, selectDisplay, setCurrentPage } from "../../features/pageState/pageStateSlice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const display = useSelector(selectDisplay);
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);


  return (
    <Container $specialStyle={display === "movies"}>
      <Wrapper>
        <LogoButtonsWrapper>
          <Logo>
            <Video />
            Movies Browser
          </Logo>
          <ButtonsWrapper>

            <StyledNavLink to={`/movies/page=${currentMoviePage}`}>
              Movies
            </StyledNavLink>
            <StyledNavLink to={`/people/page=${currentPeoplePage}`}>
              People
            </StyledNavLink>

          </ButtonsWrapper>
        </LogoButtonsWrapper>
        <InputWrapper>
          <Input
            placeholder="Search for movies..."
          />
        </InputWrapper>
      </Wrapper>
    </Container >
  )
};