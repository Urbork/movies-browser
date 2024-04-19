import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { profileSmallSizeUrl } from "../../api/api";
import { useSelector } from "react-redux";
import { selectPopularPeople } from "../../features/people/peopleSlice";

const PeopleList = () => {
  const popularPeople = useSelector(selectPopularPeople);

  return (
    <Section title="Popular people">
      <Wrapper>
        {popularPeople?.map((actor) => (
          <PeopleTile
            key={actor.id}
            id={actor.id}
            poster={profileSmallSizeUrl + actor.profile_path}
            name={actor.name}
          />
        ))}
      </Wrapper>
    </Section>
  );
};

export default PeopleList;
