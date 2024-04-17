import { useDispatch, useSelector } from "react-redux";
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
import {
  moviesDisplay,
  peopleDisplay,
  selectDisplay,
} from "../../features/pageState/pageStateSlice";
import {
  useLocation,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { toMoviesList, toPeopleList } from "../../routes";

const Navigation = () => {
  const { page } = useParams();
  const dispatch = useDispatch();
  const display = useSelector(selectDisplay);

  // TESTY
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  // KONIEC TESTÓW

  return (
    <Container $specialStyle={display === "movies"}>
      <Wrapper>
        <LogoButtonsWrapper>
          <Logo>
            <Video />
            Movies Browser
          </Logo>
          <ButtonsWrapper>
            <StyledNavLink to={toMoviesList({ page })}>
              {" "}
              {/* onClick={() => dispatch(moviesDisplay())} */}
              Movies
            </StyledNavLink>
            <StyledNavLink to={toPeopleList({ page })}>
              {" "}
              {/* onClick={() => dispatch(peopleDisplay())} */}
              People
            </StyledNavLink>
          </ButtonsWrapper>
        </LogoButtonsWrapper>
        <InputWrapper>
          <Input
            onChange={onInputChange}
            placeholder="Search for movies..."
            value={query || ""}
          />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
