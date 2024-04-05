import {
  MovieTileContent,
  MovieTileLink,
  MovieTileImage,
  MovieTileInfo,
  MovieTileTitle,
  MovieTileSubtitle,
  MovieTileTags,
  MovieTileTag,
  MovieTileRating,
  MovieTileRatingVotes,
  StyledStarIcon,
} from "./styled";
import poster from "../../images/poster.png";

export const MovieTile = () => (
  <MovieTileContent>
    <MovieTileLink href="#">
      <MovieTileImage src={poster} />
      <MovieTileInfo>
        <MovieTileTitle>Definitely Not Mulan</MovieTileTitle>
        <MovieTileSubtitle>2137</MovieTileSubtitle>
        <MovieTileTags>
          <MovieTileTag>Action</MovieTileTag>
          <MovieTileTag>Drama</MovieTileTag>
          <MovieTileTag>Black Comedy</MovieTileTag>
          <MovieTileTag>
            Very long movie tag for this movie just to test it
          </MovieTileTag>
        </MovieTileTags>
        <MovieTileRating>
          <StyledStarIcon />
          6,9
          <MovieTileRatingVotes>420 votes</MovieTileRatingVotes>
        </MovieTileRating>
      </MovieTileInfo>
    </MovieTileLink>
  </MovieTileContent>
);
