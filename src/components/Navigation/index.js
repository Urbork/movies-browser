import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  AppName,
  Video,
  InputWrapper,
  Input,
  ButtonsWrapper,
  StyledNavLink,
} from "./styled";
import { selectCurrentMoviePage, selectCurrentPeoplePage } from "../../features/pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = () => {
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <Container >
      <Wrapper>
        <LogoButtonsWrapper>
          <AppName>
            <Video />
            Movies Browser
          </AppName>
          <ButtonsWrapper>
            <StyledNavLink to={`/movies/${currentMoviePage}`}
              $active={path === "moviesDetails"}>
              Movies
            </StyledNavLink>
            <StyledNavLink to={`/people/${currentPeoplePage}`}
              $active={path === "peopleDetails"}>
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