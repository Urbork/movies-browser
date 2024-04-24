import { Section } from "../Section";
import { Wrapper } from "./styled";
import PeopleTile from "./PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopularPeople,
  selectSearchPerson,
} from "../../features/people/peopleSlice";
import { setImagesLoaded } from "../../features/pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { searchInputParamName } from "../SearchInput/searchInputParamName";

const PeopleList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchInputParamName);

  const popularPeople = useSelector(selectPopularPeople);
  const searchPerson = useSelector(selectSearchPerson);
  const dispatch = useDispatch();

  const displayData = query ? searchPerson : popularPeople;

  return (
    <Section title="Popular people">
      <Wrapper onLoad={() => dispatch(setImagesLoaded())}>
        {displayData?.map((actor) => (
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
