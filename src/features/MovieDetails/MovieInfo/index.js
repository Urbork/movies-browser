import {
  MovieDetailsWrapper,
  MovieDetailsImage,
  MovieDetailsContent,
  MovieDetailsTitle,
  MovieDetailsSubtitle,
  MovieDetailsInfo,
  MovieDetailsExtraInfo,
  MovieDetailsExtraInfoLabel,
  MovieDetailsDescription,
} from "./styled";
import {
  MovieTileTags,
  MovieTileTag,
  MovieTileRating,
  MovieTileRatingVotes,
  StyledStarIcon,
} from "../../../components/MovieTile/styled";

export const MovieInfo = ({
  poster,
  title,
  subtitle,
  production,
  releaseDate,
  tags,
  rating,
  votes,
  description,
}) => (
  <>
    <MovieDetailsWrapper>
      <MovieDetailsImage
        src={"https://image.tmdb.org/t/p/w342" + poster}
        alt={`${title} movie poster`}
      />
      <MovieDetailsContent>
        <MovieDetailsInfo>
          <MovieDetailsTitle>{title}</MovieDetailsTitle>
          <MovieDetailsSubtitle>{subtitle}</MovieDetailsSubtitle>
          <MovieDetailsExtraInfo>
            <MovieDetailsExtraInfoLabel>Production:</MovieDetailsExtraInfoLabel>{" "}
            {production}
          </MovieDetailsExtraInfo>
          <MovieDetailsExtraInfo>
            <MovieDetailsExtraInfoLabel>
              Release date:
            </MovieDetailsExtraInfoLabel>{" "}
            {releaseDate.replace(/-/g, ".")}
          </MovieDetailsExtraInfo>
          <MovieTileTags>
            {tags
              ? tags.map((tag) => (
                  <MovieTileTag key={tag.id}>{tag.name}</MovieTileTag>
                ))
              : ""}
          </MovieTileTags>
          <MovieTileRating>
            <StyledStarIcon />
            {rating}
            <MovieTileRatingVotes>{votes} votes</MovieTileRatingVotes>
          </MovieTileRating>
        </MovieDetailsInfo>
      </MovieDetailsContent>
      <MovieDetailsDescription>{description}</MovieDetailsDescription>
    </MovieDetailsWrapper>
  </>
);
