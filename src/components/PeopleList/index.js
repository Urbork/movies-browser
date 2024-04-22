import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularPeople } from "../../features/people/peopleSlice";
import { selectCurrentPeoplePage, setCurrentMoviePage, setImagesLoaded } from "../../features/pageState/pageStateSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const PeopleList = () => {
  const popularPeople = useSelector(selectPopularPeople);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const dispatch = useDispatch();
  const { page } = useParams();
  let pageNumber = +page;

  if (pageNumber !== currentPeoplePage) {
    dispatch(setCurrentMoviePage(pageNumber));
  }


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
