import { useSelector } from "react-redux";
import {
  PeopleTileNavLink,
  Wrapper,
  Image,
  Name,
  Role,
  ContentWrapper,
} from "./styled";
import blankProfile from "../../assets/blankProfile.svg";
import { profileMainSizeUrl, profileSmallSizeUrl } from "../../api/api";
import { selectMobile } from "../../features/pageStateSlice";
import { toPeopleDetailsPage } from "../../utils/routes";

const PeopleTile = ({ profile, name, id, role }) => {
  const mobile = useSelector(selectMobile);
  const profileUrl = mobile ? profileSmallSizeUrl : profileMainSizeUrl;

  return (
    <Wrapper>
      <PeopleTileNavLink to={toPeopleDetailsPage({ id: id })}>
        <Image
          src={profile ? profileUrl + profile : blankProfile}
          alt={name ? name : "no name"}
        />
        <ContentWrapper>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </ContentWrapper>
      </PeopleTileNavLink>
    </Wrapper>
  );
};

export default PeopleTile;
