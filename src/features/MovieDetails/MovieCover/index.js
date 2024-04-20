import {
  MovieCoverWrapper,
  MovieCoverImage,
  MovieCoverBlackBars,
  MovieCoverInfo,
  MovieCoverTitle,
  MovieCoverRating,
  MovieCoverRatingVotes,
  MovieCoverEffect,
} from "./styled";
import { StyledStarIcon } from "../../../components/MovieTile/MovieRating/styled";
import vignette from "../../../images/VignetteEffect.svg";
import { backdropMainSizeUrl, backdropMobileSizeUrl } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { selectImagesToLoad, selectMobile, setImagesLoaded } from "../../../features/pageState/pageStateSlice";

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
              <StyledStarIcon $big="true" />
              {rating ? rating.toFixed(1).replace(".", ",") : ""}
            </MovieCoverRating>
            <MovieCoverRatingVotes>{votes} votes</MovieCoverRatingVotes>
          </MovieCoverInfo>
        </MovieCoverWrapper>
      }
    </>
  )
};