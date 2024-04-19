import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../components/Details";
import { selectPersonContent, selectPersonId, setPersonId } from "../people/peopleSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const PeopleDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const personDetailsId = useSelector(selectPersonId);

    if (id !== personDetailsId) {
        dispatch(setPersonId(id));
    }
    const personContent = useSelector(selectPersonContent);

    return (
        <Details
            people
            id={id}
            imageURL="http://image.tmdb.org/t/p/h632"
            poster={personContent?.profile_path}
            title={personContent?.name}
            detailsExtraInfoTitle="Place of birth:"
            detailsExtraInfo={personContent?.place_of_birth}
            detailsDateInfoTitle="Date of birth:"
            detailsDateInfo={personContent?.birthday?.split("-").reverse().join(".")}
            description={personContent?.biography}
            castHeading="Cast"
            castContent="Movie cast here"
            crewHeading="Crew"
            crewContent="Movie crew here"
        />
    )
};
