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
//import { moviesDisplay, peopleDisplay } from "../../features/pageState/pageStateSlice";
import { toMoviesList, toPeopleList } from "../../routes";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { setCurrentPage } from "../../features/pageState/pageStateSlice";

export const Navigation = () => {
  const { page } = useParams();
  const dispatch = useDispatch();
  dispatch(state => setCurrentPage(state, page));

  return (
    <Container>
      <Wrapper>
        <LogoButtonsWrapper>
          <Logo>
            <Video />
            Movies Browser
          </Logo>
          <ButtonsWrapper>
            <StyledNavLink to={toMoviesList({ page })}> {/* onClick={() => dispatch(moviesDisplay())} */}
              Movies
            </StyledNavLink>
            <StyledNavLink to={toPeopleList({ page })}>   {/* onClick={() => dispatch(peopleDisplay())} */}
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