import {
  MovieTileRating,
  StyledStarIcon,
  MovieTileRatingTen,
  MovieTileRatingVotes,
  Rating,
} from "./styled";

export const MovieRating = ({ big, rating, votes }) => (
  <>
    {rating ? (
      <>
        <MovieTileRating $big={big}>
          <StyledStarIcon />
          <Rating>
            {rating.toFixed(1).replace(".", ",")}{" "}
            {big ? <MovieTileRatingTen>/ 10</MovieTileRatingTen> : ""}
          </Rating>
          <MovieTileRatingVotes $big={big}>{votes} votes</MovieTileRatingVotes>
        </MovieTileRating>
      </>
    ) : (
      <MovieTileRatingVotes>No votes yet</MovieTileRatingVotes>
    )}
  </>
);
