import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  Logo,
  Video,
  Button,
  InputWrapper,
  Input,
  ButtonsWrapper,
} from "./styled";
import { moviesDisplay, peopleDisplay, selectDisplay } from "../../features/pageState/pageStateSlice";

const Navigation = () => {
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
            <Button onClick={() => dispatch(moviesDisplay())} $specialStyle={display === "movies"}>
              Movies
            </Button>
            <Button onClick={() => dispatch(peopleDisplay())} $specialStyle={display === "movies"}>
              People
            </Button>
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

export default Navigation;