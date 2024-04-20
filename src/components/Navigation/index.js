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
} from "./styled";
import { toMoviesList, toPeopleList } from "../../routes";
import { selectDisplay } from "../../features/pageState/pageStateSlice";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
            <NavLink to={toMoviesList()}>
              <Button $specialStyle={display === "movies"}>
                Movies
              </Button>
            </NavLink>
            <NavLink to={toPeopleList()}>
              <Button $specialStyle={display === "movies"}>
                People
              </Button>
            </NavLink>
          </ButtonsWrapper>
        </LogoButtonsWrapper>
        <InputWrapper>
          <Input
            placeholder="Search for movies..."
          />
        </InputWrapper>
      </Wrapper>
    </Container>
  )
};