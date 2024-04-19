import {
  StyledNavLink,
  Image,
  ImageContainer,
  BlankActorContainer,
  Name,
  Character
} from "./styled";
import { ReactComponent as BlankActor } from "../../../images/blankActor.svg";
import { toPeopleDetails } from "../../../routes";

const PeopleTile = ({ poster, name, character, id }) => {
  return (
    <StyledNavLink to={toPeopleDetails({ id })}>
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
    </StyledNavLink>
  )
};

export default PeopleTile;