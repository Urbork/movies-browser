import {
  MovieTileRating,
  StyledStarIcon,
  MovieTileRatingTen,
  MovieTileRatingVotes,
} from "./styled";

export const MovieRating = ({ big, rating, votes }) => (
  <>
    {rating ? (
      <>
        <MovieTileRating>
          <StyledStarIcon />
          {rating.toFixed(1)}{" "}
          {big ? <MovieTileRatingTen>/ 10</MovieTileRatingTen> : ""}
          <MovieTileRatingVotes>{votes} votes</MovieTileRatingVotes>
        </MovieTileRating>
      </>
    ) : (
      <MovieTileRatingVotes>No votes yet</MovieTileRatingVotes>
    )}
  </>
);
