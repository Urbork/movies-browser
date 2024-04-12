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

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes, id, array, index }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(array.map(() => false));
  console.log("loaded", loaded)

  const handleImageLoaded = index => {
    const updatedLoaded = [...loaded];
    updatedLoaded[index] = true;
    setLoaded(updatedLoaded);
  };

  return (
    <MovieTileContent onClick={() => dispatch(setMovieDetailsId(id))}>
      <MovieTileLink >
        <MovieTileImage
          src={loaded[index] ? "https://image.tmdb.org/t/p/w342" + poster : noPoster}
          alt={loaded[index] ? `${title} movie poster` : "no poster"}
          loaded={loaded[index]}
          onLoad={() => handleImageLoaded(index)}
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
