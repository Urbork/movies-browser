import { Container, Wrapper, Header } from "./styled";
import PeopleTile from "./PeopleTile";
import { profileSmallSizeUrl } from "../../api/api";

const PeopleList = ({ credits, setPeopleDetails }) => (
  <Container>
    <Header>Popular people</Header>
    <Wrapper>
      {
        credits?.cast?.map((actor) => (
          <PeopleTile
            key={actor.id}
            id={actor.id}
            poster={profileSmallSizeUrl + actor.profile_path}
            name={actor.name}
            setPeopleDetails={setPeopleDetails}
          />
        ))
      }
    </Wrapper>
  </Container>
);

export default PeopleList;