import { useSelector } from "react-redux";
import {
  PeopleTileNavLink,
  Wrapper,
  Image,
  Name,
  Role,
  ContentWrapper
} from "./styled";
import blankActor from "../../../images/blankActor.svg";
import { useState } from "react";
import { profileMainSizeUrl, profileSmallSizeUrl } from "../../../api/api";
import { selectMobile } from "../../../features/pageState/pageStateSlice";

const PeopleTile = ({ profile, name, id, role }) => {
  const [loaded, setLoaded] = useState(false);
  const mobile = useSelector(selectMobile)
  const profileUrl = mobile ? profileSmallSizeUrl : profileMainSizeUrl;

  return (
    <Wrapper>
      <PeopleTileNavLink to={`/people/details/${id}`}>
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
      </PeopleTileNavLink>
    </Wrapper>
  )
};

export default PeopleTile;