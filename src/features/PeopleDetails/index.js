import { useSelector } from "react-redux";
import { Details } from "../../components/Details";
import { selectPersonContent } from "../people/peopleSlice";
import { Section } from "../../components/Section";
import { MoviesListWrapper } from "../../features/MoviesList/styled";
import { selectMobile } from "../pageState/pageStateSlice";
import { profileMainSizeUrl } from "../../api/api";

export const PeopleDetails = () => {

  const personContent = useSelector(selectPersonContent);
  const mobile = useSelector(selectMobile);

  return (
    <>
      <Section>
        <Details
          people
          imageURL={profileMainSizeUrl}
          poster={personContent?.profile_path}
          title={personContent?.name}
          detailsExtraInfoTitle="Place of birth:"
          detailsExtraInfo={personContent?.place_of_birth}
          detailsDateInfoTitle={mobile ? "Birth:" : "Date of birth:"}
          detailsDateInfo={personContent?.birthday?.split("-").reverse().join(".")}
          description={personContent?.biography}
        />
      </Section>
      <Section title="Movies - cast (number of videos)">
        <MoviesListWrapper>
          Movie cast here
        </MoviesListWrapper>
      </ Section>
      <Section title="Movies - crew (number of videos)" mobile={mobile}>
        <MoviesListWrapper>
          Movie crew here
        </MoviesListWrapper>
      </ Section>
    </>
  )
};
