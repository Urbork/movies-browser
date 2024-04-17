import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../components/Details";
import { selectPersonContent, setPersonId } from "../people/peopleSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const PeopleDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    dispatch(setPersonId(id));
    /*
    dispatch w tym miejscu działa, ale powoduje to, że po wejściu w szczegóły
    filmu lub aktora, stan jest ciągle zmieniany/ odświeżany. Mimo że wszystko pokazuje
    się właściwie, to w konsoli lub we wtyczce Redux do przeglądarki, widać
    że stan ciągle "pracuje".
    Poza tym, wyświetlanie działa właściwie (chyba), jak wejdziemy w szczegóły i się
    cofniemy w przeglądarce, to wrócimy do miejsca w którym byliśmy wcześniej, więc
    poza umiejscowieniem tego dispatch, wydaje się że wszystko jest ok
    */
    const personContent = useSelector(selectPersonContent);

    return (
        <Details
            people
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
