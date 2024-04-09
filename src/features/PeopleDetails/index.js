import { Details } from "../../components/Details";

export const PeopleDetails = ({ person }) => {

    return (
        <Details
            people
            imageURL="http://image.tmdb.org/t/p/h632"
            poster={person?.profile_path}
            title={person?.name}
            detailsExtraInfoTitle="Place of birth:"
            detailsExtraInfo={person?.place_of_birth}
            detailsDateInfoTitle="Date of birth:"
            detailsDateInfo={person?.birthday?.split("-").reverse().join(".")}
            description={person?.biography}
            castHeading="Cast"
            castContent="Movie cast here"
            crewHeading="Crew"
            crewContent="Movie crew here"
        />
    )
};
