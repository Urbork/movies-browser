import { useSelector, useDispatch } from "react-redux";

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
import { displayMovies, switchToMovies, switchToPeople } from "../../features/MoviesList/moviesSlice";
// import { changePageToFirst, selectPopularMovies, setPopularMovies } from "../../features/MoviesList/moviesSlice";

const Navigation = ({ setMovieDetails, setRouterStatus }) => {
    const dispatch = useDispatch();

    // const switchToMovies = () => {
    //     setRouterStatus("movies")
    //     setMovieDetails(null)
    // };

    // const switchToPeople = () => {
    //     setRouterStatus("people")
    // };

    return (
        <Container>
            <Wrapper>
                <LogoButtonsWrapper>
                    <Logo>
                        <Video />
                        Movies Browser
                    </Logo>
                    <ButtonsWrapper>
                        <Button onClick={() => dispatch(switchToMovies())}>
                            Movies
                        </Button>
                        <Button onClick={() => dispatch(switchToPeople())}>
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