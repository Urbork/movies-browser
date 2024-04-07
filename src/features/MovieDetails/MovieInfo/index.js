import {
  MovieDetailsWrapper,
  MovieDetailsImage,
  MovieDetailsTitle,
  MovieDetailsSubtitle,
  MovieDetailsInfo,
  MovieDetailsExtraInfo,
  MovieDetailsExtraInfoLabel,
  MovieDetailsDescription,
} from "./styled";
import { MovieTags } from "../../../components/MovieTile/MovieTags";
import { MovieRating } from "../../../components/MovieTile/MovieRating";

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
      <MovieDetailsInfo>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailsSubtitle>{subtitle}</MovieDetailsSubtitle>
        <MovieDetailsExtraInfo>
          <MovieDetailsExtraInfoLabel>Production:</MovieDetailsExtraInfoLabel>{" "}
          {production}
        </MovieDetailsExtraInfo>
        <MovieDetailsExtraInfo>
          <MovieDetailsExtraInfoLabel>Release date:</MovieDetailsExtraInfoLabel>{" "}
          {releaseDate ? releaseDate.replace(/-/g, ".") : ""}
        </MovieDetailsExtraInfo>
        <MovieTags tags={tags ? tags.map((tag) => tag.name) : ""} />
        <MovieRating big="true" rating={rating} votes={votes} />
      </MovieDetailsInfo>
      <MovieDetailsDescription>{description}</MovieDetailsDescription>
    </MovieDetailsWrapper>
  </>
);
