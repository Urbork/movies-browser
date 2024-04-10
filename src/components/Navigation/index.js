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

const Navigation = ({ setMovieDetails, setPeopleDetails, setRouterStatus }) => {
    const switchToMovies = () => {
        setRouterStatus("movies");
        setMovieDetails(null);
    };

    const switchToPeople = () => {
        setRouterStatus("people");
        setPeopleDetails(null);
    };

    return (
        <Container>
            <Wrapper>
                <LogoButtonsWrapper>
                    <Logo>
                        <Video />
                        Movies Browser
                    </Logo>
                    <ButtonsWrapper>
                        <Button onClick={switchToMovies}>
                            Movies
                        </Button>
                        <Button onClick={switchToPeople}>
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