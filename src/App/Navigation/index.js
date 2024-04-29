import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  AppName,
  Video,
  InputWrapper,
  ButtonsWrapper,
  StyledNavLink,
} from "./styled";
import { selectCurrentMoviePage, selectCurrentPeoplePage } from "../pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toMoviesPage, toPeoplePage } from "../routes";
import { SearchInput } from "./SearchInput";

export const Navigation = () => {
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  return (
    <Container >
      <Wrapper>
        <LogoButtonsWrapper>
          <AppName>
            <Video />
            Movies Browser
          </AppName>
          <ButtonsWrapper>
            <StyledNavLink to={toMoviesPage({ page: currentMoviePage })}
              $active={pathName === "movies"}>
              Movies
            </StyledNavLink>
            <StyledNavLink to={toPeoplePage({ page: currentPeoplePage })}
              $active={pathName === "people"}>
              People
            </StyledNavLink>
          </ButtonsWrapper>
        </LogoButtonsWrapper>
        <InputWrapper>
          <SearchInput />
        </InputWrapper>
      </Wrapper>
    </Container >
  )
};