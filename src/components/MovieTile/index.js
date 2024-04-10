import { useSelector, useDispatch } from "react-redux";
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
import { useMovieTile } from "./useMovieTile";
import { getMovieDetails } from "../../api/fetchApi";
import { selectMovieDetails, setMovieDetailsId } from "../../features/movies/moviesSlice";

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes, id }) => {
  const dispatch = useDispatch();
  // const selectMovieDetails = useSelector();

  return (
    <MovieTileContent onClick={() => dispatch(setMovieDetailsId(id))}>
      <MovieTileLink >
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
  )
};
