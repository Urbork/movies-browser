import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  Logo,
  Video,
  StyledNavLink,
  InputWrapper,
  ButtonsWrapper,
} from "./styled";
import { selectDisplay } from "../../features/pageState/pageStateSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { toMoviesList, toPeopleList } from "../../routes";
import { SearchInput } from "../SearchInput";

const Navigation = () => {
  const { page } = useParams();
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
            <StyledNavLink to={toMoviesList({ page })}> Movies</StyledNavLink>
            <StyledNavLink to={toPeopleList({ page })}> People</StyledNavLink>
          </ButtonsWrapper>
        </LogoButtonsWrapper>
        <InputWrapper>
          <SearchInput />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
