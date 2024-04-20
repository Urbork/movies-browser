import { useDispatch, useSelector } from "react-redux";
import {
  StyledNavLink,
  Image,
  Name,
  Character
} from "./styled";
import blankActor from "../../../images/blankActor.svg";
import { useState } from "react";
import { profileMainSizeUrl, profileSmallSizeUrl } from "../../../api/api";
import { selectMobile } from "../../../features/pageState/pageStateSlice";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const PeopleTile = ({ profile, name, character, id }) => {
  const [loaded, setLoaded] = useState(false);
  const mobile = useSelector(selectMobile)
  const profileUrl = mobile ? profileSmallSizeUrl : profileMainSizeUrl;

  return (
    <NavLink to={toMovieDetails(id)}>
      <Wrapper>
        <Image
          src={(loaded && profile) ? profileUrl + profile : blankActor}
          alt={(loaded && name) ? name : "no name"}
          $loaded={loaded}
          onLoad={() => setLoaded(true)}
        />
        <Name>{name}</Name>
        <Character>{character}</Character>
      </Wrapper>
    </NavLink>
  )
};

export default PeopleTile;