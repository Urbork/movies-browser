import {
    Wrapper,
    Image,
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
                    <Image
                        src={poster}
                    />
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