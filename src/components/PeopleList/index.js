import { Container, Wrapper, Header } from "./styled";
import PeopleTile from "./PeopleTile";
import { profileSmallSizeUrl } from "../../api/api";

const PeopleList = ({ popularPeople, setPeopleDetails }) => (
  <Container>
    <Header>Popular people</Header>
    <Wrapper>
      {
        popularPeople?.results?.map((actor) => (
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