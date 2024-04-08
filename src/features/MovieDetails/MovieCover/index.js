import {
  MovieCoverWrapper,
  MovieCoverImage,
  MovieCoverBlackBars,
  MovieCoverInfo,
  MovieCoverTitle,
  MovieCoverRating,
  MovieCoverRatingVotes,
  MovieCoverEffect,
} from "./styled";
import vignette from "../../../images/VignetteEffect.png";
import { StyledStarIcon } from "../../../components/MovieTile/MovieRating/styled";

export const MovieCover = ({ cover, title, rating, votes }) => (
  <>
    <MovieCoverWrapper>
      <MovieCoverBlackBars />
      <MovieCoverEffect src={vignette} />
      <MovieCoverImage
        src={"https://image.tmdb.org/t/p/original" + cover}
        alt={`${title} movie cover image`}
      />
      <MovieCoverInfo>
        <MovieCoverTitle>{title}</MovieCoverTitle>
        <MovieCoverRating>
          <StyledStarIcon big="true" />
          {rating ? rating.toFixed(1).replace(".", ",") : ""}
        </MovieCoverRating>
        <MovieCoverRatingVotes>{votes} votes</MovieCoverRatingVotes>
      </MovieCoverInfo>
    </MovieCoverWrapper>
  </>
);
