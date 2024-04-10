import { useDispatch } from "react-redux";
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
import { moviesDisplay, peopleDisplay } from "../../features/pageState/pageStateSlice";

const Navigation = () => {
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
            <Button onClick={() => dispatch(moviesDisplay())}>
              Movies
            </Button>
            <Button onClick={() => dispatch(peopleDisplay())}>
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