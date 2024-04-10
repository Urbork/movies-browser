import { useDispatch } from "react-redux";
import {
  Wrapper,
  Image,
  ImageContainer,
  BlankActorContainer,
  Name,
  Character
} from "./styled";
import { ReactComponent as BlankActor } from "../../../images/blankActor.svg";
import { setPersonId } from "../../../features/people/peopleSlice";

const PeopleTile = ({ poster, name, character, id }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper onClick={() => dispatch(setPersonId(id))}
    >
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