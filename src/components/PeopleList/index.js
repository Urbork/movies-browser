import { Container, Wrapper, Header } from "./styled";
import PeopleTile from "./PeopleTile";
import { profileSmallSizeUrl } from "../../api/api";
import { useSelector } from "react-redux";
import { selectMovieDetailsCredits } from "../../features/MoviesList/moviesSlice";

const PeopleList = () => {
  const credits = useSelector(selectMovieDetailsCredits);
  return (
    <>
      <Header>Popular people</Header>
      <Wrapper>
        {
          credits?.cast.map((actor) => (
            <PeopleTile
              poster={profileSmallSizeUrl + actor.profile_path}
              name={actor.name}
            />
          ))
        }
      </Wrapper>
    </>
  )
};

export default PeopleList;