import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  Logo,
  Video,
  InputWrapper,
  ButtonsWrapper,
  StyledNavLink,
} from "./styled";
import { toMoviesList, toPeopleList } from "../../routes";
import {
  moviesDisplay,
  peopleDisplay,
  selectDisplay,
} from "../../features/pageState/pageStateSlice";
import { SearchInput } from "../SearchInput";

export const Navigation = () => {
  const dispatch = useDispatch();
  const display = useSelector(selectDisplay);

  return (
    <Container $specialStyle={display === "movies"}>
      <Wrapper>
        <LogoButtonsWrapper>
          <Logo>
            <Video />
            Movies Browser
          </Logo>
          <ButtonsWrapper>
            <StyledNavLink
              to={toMoviesList()}
              onClick={() => dispatch(moviesDisplay())}
              $specialStyle={display === "movies"}
            >
              Movies
            </StyledNavLink>
            <StyledNavLink
              to={toPeopleList()}
              onClick={() => dispatch(peopleDisplay())}
              $specialStyle={display === "movies"}
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
