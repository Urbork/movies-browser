import {
  MovieCoverWrapper,
  MovieCoverImage,
  MovieCoverBlackBars,
  MovieCoverInfo,
  MovieCoverTitle,
  MovieCoverRating,
  MovieCoverRatingVotes,
  MovieCoverEffect,
  MovieTileRatingCoverTen,
  RatingCover,
  StyledCoverStarIcon,
} from "./styled";
import vignette from "../../../../../images/VignetteEffect.svg";
import { backdropMainSizeUrl, backdropMobileSizeUrl } from "../../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { selectImagesToLoad, selectMobile, setImagesLoaded } from "../../../../pageStateSlice";

export const MovieCover = ({ cover, title, rating, votes }) => {
  const dispatch = useDispatch();
  const mobile = useSelector(selectMobile);
  const backdropUrl = mobile ? backdropMobileSizeUrl : backdropMainSizeUrl;
  const imagesToLoad = useSelector(selectImagesToLoad);

  return (
    <>
      {cover &&
        <MovieCoverWrapper $show={!imagesToLoad}>
          <MovieCoverBlackBars />
          <MovieCoverImage
            src={backdropUrl + cover}
            alt={`${title} movie cover image`}
            onLoad={() => dispatch(setImagesLoaded())}
            $show={!imagesToLoad}
          />
          <MovieCoverEffect src={vignette} />
          <MovieCoverInfo $show={!imagesToLoad}>
            <MovieCoverTitle>{title}</MovieCoverTitle>
            <MovieCoverRating>
              <StyledCoverStarIcon />
              <RatingCover>
                {rating ? rating.toFixed(1).replace(".", ",") : ""}
                <MovieTileRatingCoverTen >/ 10</MovieTileRatingCoverTen>
              </RatingCover>
              <MovieCoverRatingVotes>{votes} votes</MovieCoverRatingVotes>
            </MovieCoverRating>
          </MovieCoverInfo>
        </MovieCoverWrapper>
      }
    </>
  )
};