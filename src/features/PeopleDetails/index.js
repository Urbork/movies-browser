import { useSelector } from "react-redux";
import { Details } from "../../components/Details";
import { selectPersonContent } from "../people/peopleSlice";

export const PeopleDetails = () => {
    const personContent = useSelector(selectPersonContent)

    return (
        <Details
            people
            imageURL="http://image.tmdb.org/t/p/h632"
            poster={personContent.profile_path}
            title={personContent.name}
            detailsExtraInfoTitle="Place of birth:"
            detailsExtraInfo={personContent.place_of_birth}
            detailsDateInfoTitle="Date of birth:"
            detailsDateInfo={personContent.birthday?.split("-").reverse().join(".")}
            description={personContent.biography}
            castHeading="Cast"
            castContent="Movie cast here"
            crewHeading="Crew"
            crewContent="Movie crew here"
        />
    )
};
