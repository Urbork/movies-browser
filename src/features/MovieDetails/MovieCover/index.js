import {
  MovieCoverWrapper,
  MovieCoverImage,
  MovieCoverBlackBars,
  MovieCoverInfo,
  MovieCoverTitle,
  MovieCoverRating,
  MovieCoverRatingVotes,
} from "./styled";
import cover from "../../../images/cover.png";
import { StyledStarIcon } from "../../../components/MovieTile/styled";

export const MovieCover = () => (
  <>
    <MovieCoverWrapper>
      <MovieCoverBlackBars>
        <MovieCoverImage src={cover} />
      </MovieCoverBlackBars>
    </MovieCoverWrapper>
    {/* <MovieCoverInfo>
      <MovieCoverTitle>MULAN a może jednak nie </MovieCoverTitle>
      <MovieCoverRating>
        <StyledStarIcon big />
        7,8 / 10 <br />
      </MovieCoverRating>
      <MovieCoverRatingVotes>335 votes</MovieCoverRatingVotes>
    </MovieCoverInfo> */}
  </>
);
