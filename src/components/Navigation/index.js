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
  StyledNavLink,
} from "./styled";
import { selectCurrentMoviePage, selectCurrentPeoplePage } from "../../features/pageState/pageStateSlice";

export const Navigation = () => {
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);

  return (
    <Container >
      <Wrapper>
        <LogoButtonsWrapper>
          <Logo>
            <Video />
            Movies Browser
          </Logo>
          <ButtonsWrapper>
            <StyledNavLink to={`/movies/${currentMoviePage}`}>
              Movies
            </StyledNavLink>
            <StyledNavLink to={`/people/${currentPeoplePage}`}>
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