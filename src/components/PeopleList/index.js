import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularPeople } from "../../features/people/peopleSlice";
import { setImagesLoaded } from "../../features/pageState/pageStateSlice";

const PeopleList = () => {
  const popularPeople = useSelector(selectPopularPeople);
  const dispatch = useDispatch();

  return (
    <Section title="Popular people">
      <Wrapper onLoad={() => dispatch(setImagesLoaded())}>
        {popularPeople?.map((actor) => (
          <PeopleTile
            key={actor.id}
            id={actor.id}
            profile={actor.profile_path}
            name={actor.name}
          />
        ))}
      </Wrapper>
    </Section>
  );
};

export default PeopleList;
