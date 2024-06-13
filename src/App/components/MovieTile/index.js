import { useSelector } from "react-redux";
import {
  MovieTileContent,
  MovieTileNavLink,
  MovieTileImage,
  MovieTileInfo,
  MovieTileTitle,
  MovieTileSubtitle,
  MovieTileInfoWrapper,
} from "./styled";
import noPoster from "../../../images/noPoster.svg";
import { MovieTags } from "../MovieTags";
import { MovieRating } from "../MovieRating";
import { useState } from "react";
import { posterMainSizeUrl, posterMobileSizeUrl } from "../../api/api";
import { selectMobile } from "../../pageStateSlice";
import { toMovieDetailsPage } from "../../routes";

export const MovieTile = ({
  poster,
  title,
  subtitle,
  tags,
  genres,
  rating,
  votes,
  id,
}) => {
  const [loaded, setLoaded] = useState(false);
  const mobile = useSelector(selectMobile);
  const posterUrl = mobile ? posterMobileSizeUrl : posterMainSizeUrl;

  return (
    <MovieTileContent>
      <MovieTileNavLink to={toMovieDetailsPage({ id: id })}>
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
            <MovieTags tags={tags} genres={genres} />
          </MovieTileInfo>
          <MovieRating rating={rating} votes={votes} />
        </MovieTileInfoWrapper>
      </MovieTileNavLink>
    </MovieTileContent>
  );
};
