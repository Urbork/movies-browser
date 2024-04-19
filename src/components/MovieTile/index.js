import {
  MovieTileContent,
  MovieTileNavLink,
  MovieTileImage,
  MovieTileInfoWrapper,
  MovieTileInfo,
  MovieTileTitle,
  MovieTileSubtitle,
} from "./styled";
import posterNotFound from "../../images/VectorNoImage.svg";
import { MovieTags } from "./MovieTags";
import { MovieRating } from "./MovieRating";
import { toMovieDetails } from "../../routes";

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes, id }) => {

  return (
    <MovieTileContent>
      <MovieTileNavLink to={toMovieDetails({ id })}>
        {/*
          po kliknięciu w kafel filmu lub aktora, przekazywane jest ID
          tego kafla do NavLinka, co pojawia się w URLu i od razu generowany
          jest widok MovieDetails lub PeopleDetails
        */}
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
      </MovieTileNavLink>
    </MovieTileContent>
  )
};
