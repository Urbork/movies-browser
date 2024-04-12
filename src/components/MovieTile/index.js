import { useDispatch } from "react-redux";
import {
  MovieTileContent,
  MovieTileLink,
  MovieTileImage,
  MovieTileInfoWrapper,
  MovieTileInfo,
  MovieTileTitle,
  MovieTileSubtitle,
} from "./styled";
import noPoster from "../../images/noPoster.svg";
import { MovieTags } from "./MovieTags";
import { MovieRating } from "./MovieRating";
import { setMovieDetailsId } from "../../features/movies/moviesSlice";
import { useState } from "react";

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes, id }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  return (
    <MovieTileContent onClick={() => dispatch(setMovieDetailsId(id))}>
      <MovieTileLink >
        <MovieTileImage
          src={loaded ? "https://image.tmdb.org/t/p/w342" + poster : noPoster}
          alt={loaded ? `${title} movie poster` : "no poster"}
          loaded={loaded}
          onLoad={() => setLoaded(true)}
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
