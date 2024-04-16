import { useDispatch } from "react-redux";
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
import { setMovieDetailsId } from "../../features/movies/moviesSlice";
import { toMovieDetails } from "../../routes";

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes, id }) => {
  //const dispatch = useDispatch();
  //onClick={() => dispatch(setMovieDetailsId(id))}
  return (
    <MovieTileContent>
      <MovieTileNavLink to={toMovieDetails({ id })}>
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
