import {
  Wrapper,
  Image,
  ImageContainer,
  BlankActorContainer,
  Name,
  Character
} from "./styled";
import { ReactComponent as BlankActor } from "../../../images/blankActor.svg";
import { usePeopleTile } from "./usePeopleTile";

const PeopleTile = ({ poster, name, character, setPeopleDetails, id }) => {
  const { fetchApiPeopleDetails } = usePeopleTile(setPeopleDetails);
  //console.log(id);

  return (
    <Wrapper onClick={() => fetchApiPeopleDetails(id)}>
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
  )
};

export default PeopleTile;