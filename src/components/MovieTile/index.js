import {
  MovieTileContent,
  MovieTileLink,
  MovieTileImage,
  MovieTileInfoWrapper,
  MovieTileInfo,
  MovieTileTitle,
  MovieTileSubtitle,
} from "./styled";
import posterNotFound from "../../images/VectorNoImage.svg";
import { MovieTags } from "./MovieTags";
import { MovieRating } from "./MovieRating";

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes }) => (
  <MovieTileContent>
    <MovieTileLink href="">
      <MovieTileImage
        src={
          poster ? "https://image.tmdb.org/t/p/w342" + poster : posterNotFound
        }
        alt={`${title} movie poster`}
      />
      <MovieTileInfoWrapper>
        <MovieTileInfo>
          <MovieTileTitle>{title}</MovieTileTitle>
          <MovieTileSubtitle>{subtitle}</MovieTileSubtitle>
          <MovieTags tags={tags} />
        </MovieTileInfo>
        <MovieRating rating={rating} votes={votes} />
      </MovieTileInfoWrapper>
    </MovieTileLink>
  </MovieTileContent>
);
