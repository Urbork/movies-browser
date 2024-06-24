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
import noPoster from "../../assets/noPoster.svg";
import { MovieTags } from "../MovieTags";
import { MovieRating } from "../MovieRating";
import { posterMainSizeUrl, posterMobileSizeUrl } from "../../api/api";
import { selectMobile } from "../../features/pageStateSlice";
import { toMovieDetailsPage } from "../../utils/routes";

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
  const mobile = useSelector(selectMobile);
  const posterUrl = mobile ? posterMobileSizeUrl : posterMainSizeUrl;

  return (
    <MovieTileContent>
      <MovieTileNavLink to={toMovieDetailsPage({ id: id })}>
        <MovieTileImage
          src={poster ? posterUrl + poster : noPoster}
          alt={title ? `${title} movie poster` : "no poster"}
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
