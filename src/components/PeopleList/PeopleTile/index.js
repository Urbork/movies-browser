import {
    Wrapper,
    Image,
    ImageContainer,
    BlankActorContainer,
    Name,
    Character
} from "./styled";
import { ReactComponent as BlankActor } from "../../../images/blankActor.svg";

const PeopleTile = ({ poster, name, character }) => (
    <>
        <Wrapper>
            {
                !poster.includes("null") ?
                    <ImageContainer>
                        <Image
                            src={poster}
                        />
                    </ImageContainer>

                    :
                    <BlankActorContainer>
                        <BlankActor />
                    </BlankActorContainer>
            }
            <Name>{name}</Name>
            <Character>{character}</Character>
        </Wrapper>
        {console.log(poster)}
    </>
);

export default PeopleTile;