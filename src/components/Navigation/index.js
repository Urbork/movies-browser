import { useDispatch } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  Logo,
  Video,
  StyledNavLink,
  InputWrapper,
  Input,
  ButtonsWrapper,
} from "./styled";
import { moviesDisplay, peopleDisplay } from "../../features/pageState/pageStateSlice";

export const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <LogoButtonsWrapper>
          <Logo>
            <Video />
            Movies Browser
          </Logo>
          <ButtonsWrapper>
            <StyledNavLink to="/moviesList"> {/* onClick={() => dispatch(moviesDisplay())} */}
              Movies
            </StyledNavLink>
            <StyledNavLink to="/peopleList">   {/* onClick={() => dispatch(peopleDisplay())} */}
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
    </Container>
  )
};