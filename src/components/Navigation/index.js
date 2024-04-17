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
//import { moviesDisplay, peopleDisplay } from "../../features/pageState/pageStateSlice";
import { toMoviesList, toPeopleList } from "../../routes";

export const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <LogoButtonsWrapper>
          <Logo>
            <Video />
            Movies Browser
          </Logo>
          <ButtonsWrapper>
            <StyledNavLink to={toMoviesList()}> {/* onClick={() => dispatch(moviesDisplay())} */}
              Movies
            </StyledNavLink>
            <StyledNavLink to={toPeopleList()}>   {/* onClick={() => dispatch(peopleDisplay())} */}
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