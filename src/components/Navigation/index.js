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
import { selectCurrentMoviePage, selectCurrentPeoplePage } from "../../features/pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toMoviesList, toPeopleList } from "../../routes";
import { SearchInput } from "../SearchInput";

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
            <StyledNavLink to={toMoviesList({ page: currentMoviePage })}
              $active={pathName === "movies"}>
              Movies
            </StyledNavLink>
            <StyledNavLink to={toPeopleList({ page: currentPeoplePage })}
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