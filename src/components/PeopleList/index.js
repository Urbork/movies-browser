import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { profileSmallSizeUrl } from "../../api/api";

const PeopleList = ({ popularPeople, setPeopleDetails }) => (
  <Section title="Popular people">
    <Wrapper>
      {popularPeople?.results?.map((actor) => (
        <PeopleTile
          key={actor.id}
          id={actor.id}
          poster={profileSmallSizeUrl + actor.profile_path}
          name={actor.name}
          setPeopleDetails={setPeopleDetails}
        />
      ))}
    </Wrapper>
  </Section>
);

export default PeopleList;
