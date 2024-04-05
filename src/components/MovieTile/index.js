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
import posterNotFound from "../../images/noimg.svg";

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes }) => (
  <MovieTileContent>
    <MovieTileLink href="">
      <MovieTileImage
        src={
          poster ? "https://image.tmdb.org/t/p/w342" + poster : posterNotFound
        }
        alt={`${title} movie poster`}
      />
      <MovieTileInfo>
        <MovieTileTitle>{title}</MovieTileTitle>
        <MovieTileSubtitle>{subtitle}</MovieTileSubtitle>
        <MovieTileTags>
          {tags
            ? tags.map((tag) => <MovieTileTag key={tag}>{tag}</MovieTileTag>)
            : ""}
        </MovieTileTags>
        {rating ? (
          <MovieTileRating>
            <StyledStarIcon />
            {rating.toFixed(1)}
            <MovieTileRatingVotes>{votes} votes</MovieTileRatingVotes>
          </MovieTileRating>
        ) : (
          <MovieTileRatingVotes>No votes yet</MovieTileRatingVotes>
        )}
      </MovieTileInfo>
    </MovieTileLink>
  </MovieTileContent>
);
