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
        <MovieTileRating>
          <StyledStarIcon />
          <Rating $big={big}>{rating.toFixed(1).replace(".", ",")} </Rating>
          {big ? <MovieTileRatingTen>/ 10</MovieTileRatingTen> : ""}
          <MovieTileRatingVotes $big={big}>{votes} votes</MovieTileRatingVotes>
        </MovieTileRating>
      </>
    ) : (
      <MovieTileRatingVotes>No votes yet</MovieTileRatingVotes>
    )}
  </>
);
