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
            <StyledNavLink to={toMoviesList()}>
              Movies
            </StyledNavLink>
            <StyledNavLink to={toPeopleList()}>
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