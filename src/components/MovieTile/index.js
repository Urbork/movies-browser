import { useSelector } from "react-redux";
import {
  MovieTileContent,
  MovieTileNavLink,
  MovieTileImage,
  MovieTileInfoWrapper,
  MovieTileInfo,
  MovieTileTitle,
  MovieTileSubtitle,
} from "./styled";
import noPoster from "../../images/noPoster.svg";
import { MovieTags } from "./MovieTags";
import { MovieRating } from "./MovieRating";
import { toMovieDetails } from "../../routes";
import { useState } from "react";
import { posterMainSizeUrl, posterMobileSizeUrl } from "../../api/api";
import { selectMobile } from "../../features/pageState/pageStateSlice";
import { toMovieDetails } from "../../routes";

export const MovieTile = ({
  poster,
  title,
  subtitle,
  tags,
  rating,
  votes,
  id,
}) => {
  const [loaded, setLoaded] = useState(false);
  const mobile = useSelector(selectMobile);
  const posterUrl = mobile ? posterMobileSizeUrl : posterMainSizeUrl;

  return (
    <MovieTileContent>
      <MovieTileNavLink to={toMovieDetails({ id: id })}>
        <MovieTileImage
          src={loaded && poster ? posterUrl + poster : noPoster}
          alt={loaded && title ? `${title} movie poster` : "no poster"}
          $loaded={loaded}
          onLoad={() => setLoaded(true)}
        />
        <MovieTileInfoWrapper>
          <MovieTileInfo>
            <MovieTileTitle>{title}</MovieTileTitle>
            <MovieTileSubtitle>{subtitle}</MovieTileSubtitle>
            <MovieTags tags={tags} />
          </MovieTileInfo>
          <MovieRating rating={rating} votes={votes} />
        </MovieTileInfoWrapper>
      </MovieTileNavLink>
    </MovieTileContent>
  );
};
