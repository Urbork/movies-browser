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

const Navigation = ({ setMovieDetails }) => {
    return (
        <Container>
            <Wrapper>
                <LogoButtonsWrapper>
                    <Logo>
                        <Video />
                        Movies Browser
                    </Logo>
                    <ButtonsWrapper>
                        <Button onClick={() => setMovieDetails(null)}>
                            Movies
                        </Button>
                        <Button>
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