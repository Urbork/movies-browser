import { useSelector } from "react-redux";
import {
  PeopleTileNavLink,
  Wrapper,
  Image,
  Name,
  Role,
  ContentWrapper
} from "./styled";
import blankProfile from "../../../images/blankProfile.svg";
import { useState } from "react";
import { profileMainSizeUrl, profileSmallSizeUrl } from "../../../api/api";
import { selectMobile } from "../../../features/pageState/pageStateSlice";
import { toPeopleDetails } from "../../../routes";

const PeopleTile = ({ profile, name, id, role }) => {
  const [loaded, setLoaded] = useState(false);
  const mobile = useSelector(selectMobile)
  const profileUrl = mobile ? profileSmallSizeUrl : profileMainSizeUrl;

  return (
    <Wrapper>
      <PeopleTileNavLink to={toPeopleDetails({ id: id })}>
        <Image
          src={(loaded && profile) ? profileUrl + profile : blankProfile}
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