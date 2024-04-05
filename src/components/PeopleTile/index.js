import { Wrapper, Image, Name, Character } from "./styled";
//import poster from "../../images/poster.png"

const PeopleTile = ({ poster, name, character }) => (
    <Wrapper>
        <Image
            src={
                poster
            }
        />
        <Name>{name}</Name>
        <Character>{character}</Character>
    </Wrapper>
);

export default PeopleTile;