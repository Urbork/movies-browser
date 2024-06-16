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
  LogoLink,
} from "./styled";
import {
  selectCurrentMoviePage,
  selectCurrentPeoplePage,
} from "../../pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { toMoviesPage, toPeoplePage } from "../../routes";
import { SearchInput } from "./SearchInput";
import { backToHome } from "../../pageStateSlice";
import { searchPageParamName } from "../../utils/searchParamNames";
import { useReplaceQueryParameter } from "../../utils/useQueryParameters";

export const Navigation = () => {
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <LogoButtonsWrapper>
          <LogoLink to="/" onClick={() => dispatch(backToHome())}>
            <AppName>
              <Video />
              Movies Browser
            </AppName>
          </LogoLink>
          <ButtonsWrapper>
            <StyledNavLink
              to={toMoviesPage({ page: currentMoviePage })}
              $active={pathName === "movies"}
            >
              Movies
            </StyledNavLink>
            <StyledNavLink
              to={toPeoplePage({ page: currentPeoplePage })}
              $active={pathName === "people"}
            >
              People
            </StyledNavLink>
          </ButtonsWrapper>
        </LogoButtonsWrapper>
        <InputWrapper>
          <SearchInput />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};
