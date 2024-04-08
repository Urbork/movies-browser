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
        <MovieTileRating big={big}>
          <StyledStarIcon />
          {rating.toFixed(1).replace(".", ",")}{" "}
          {big ? <MovieTileRatingTen>/ 10</MovieTileRatingTen> : ""}
          <MovieTileRatingVotes big={big}>{votes} votes</MovieTileRatingVotes>
        </MovieTileRating>
      </>
    ) : (
      <MovieTileRatingVotes>No votes yet</MovieTileRatingVotes>
    )}
  </>
);
