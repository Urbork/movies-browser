import {
  MovieTileRating,
  MovieTileRatingVotes,
  StyledStarIcon,
} from "./styled";

export const MovieRating = ({ rating, votes }) => (
  <>
    {rating ? (
      <MovieTileRating>
        <StyledStarIcon />
        {rating.toFixed(1)}
        <MovieTileRatingVotes>{votes} votes</MovieTileRatingVotes>
      </MovieTileRating>
    ) : (
      <MovieTileRatingVotes>No votes yet</MovieTileRatingVotes>
    )}
  </>
);
