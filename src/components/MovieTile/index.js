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
import noPoster from "../../images/noPoster.svg";
import { MovieTags } from "./MovieTags";
import { MovieRating } from "./MovieRating";
import { setMovieDetailsId } from "../../features/movies/moviesSlice";
import { useState } from "react";
import { posterMainSizeUrl, posterMobileSizeUrl } from "../../api/api";
import { selectMobile } from "../../features/pageState/pageStateSlice";

export const MovieTile = ({ poster, title, subtitle, tags, rating, votes, id }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const mobile = useSelector(selectMobile);
  const posterUrl = mobile ? posterMobileSizeUrl : posterMainSizeUrl;

  return (
    <MovieTileContent onClick={() => dispatch(setMovieDetailsId(id))}>
      <MovieTileLink >
        <MovieTileImage
          src={(loaded && poster) ? posterUrl + poster : noPoster}
          alt={(loaded && title) ? `${title} movie poster` : "no poster"}
          $loaded={loaded}
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
