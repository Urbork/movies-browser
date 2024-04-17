import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  Image,
  Name,
  Role,
  ContentWrapper
} from "./styled";
import { setPersonId } from "../../../features/people/peopleSlice";
import blankActor from "../../../images/blankActor.svg";
import { useState } from "react";
import { profileMainSizeUrl, profileSmallSizeUrl } from "../../../api/api";
import { selectMobile } from "../../../features/pageState/pageStateSlice";

const PeopleTile = ({ profile, name, id, role }) => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const mobile = useSelector(selectMobile)
  const profileUrl = mobile ? profileSmallSizeUrl : profileMainSizeUrl;

  return (
    <Wrapper onClick={() => dispatch(setPersonId(id))}
    >
      <Image
        src={(loaded && profile) ? profileUrl + profile : blankActor}
        alt={(loaded && name) ? name : "no name"}
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
      <ContentWrapper >
        <Name>{name}</Name>
        <Role>{role}</Role>
      </ContentWrapper>
    </Wrapper>
  )
};

export default PeopleTile;