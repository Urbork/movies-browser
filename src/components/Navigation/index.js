import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  Logo,
  Video,
  InputWrapper,
  Input,
  ButtonsWrapper,
  Button,
  StyledNavLink,
} from "./styled";
import { toMoviesList, toPeopleList } from "../../routes";
import { selectDisplay } from "../../features/pageState/pageStateSlice";

export const Navigation = () => {
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
              $specialStyle={display === "movies"}
            >
              Movies
            </StyledNavLink>
            <StyledNavLink
              to={toPeopleList()}
              $specialStyle={display === "movies"}
            >
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