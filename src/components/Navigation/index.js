import {
    Container,
    Wrapper,
    LogoButtonsWrapper,
    Logo,
    Button,
    InputWrapper,
    Input,
    ButtonsWrapper,
} from "./styled";
import { ReactComponent as Video } from "../../images/video.svg";

const Navigation = () => {
    return (
        <Container>
            <Wrapper>
                <LogoButtonsWrapper>
                    <Logo>
                        <Video />
                        Movies Browser
                    </Logo>
                    <ButtonsWrapper>
                        <Button>
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