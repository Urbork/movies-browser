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
import vignette from "../../../../assets/VignetteEffect.svg";
import {
  backdropMainSizeUrl,
  backdropMobileSizeUrl,
} from "../../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMobile,
  selectShowContent,
  setShowContent,
} from "../../../pageStateSlice";

export const MovieCover = ({ cover, title, rating, votes }) => {
  const dispatch = useDispatch();
  const mobile = useSelector(selectMobile);
  const backdropUrl = mobile ? backdropMobileSizeUrl : backdropMainSizeUrl;
  const showContent = useSelector(selectShowContent);

  const onLoadHandler = () => {
    !showContent && dispatch(setShowContent());
  };

  return (
    <>
      {cover && (
        <MovieCoverWrapper $show={showContent}>
          <MovieCoverBlackBars />
          <MovieCoverImage
            src={backdropUrl + cover}
            alt={`${title} movie cover image`}
            onLoad={onLoadHandler}
            $show={showContent}
          />
          <MovieCoverEffect src={vignette} />
          <MovieCoverInfo $show={showContent}>
            <MovieCoverTitle>{title}</MovieCoverTitle>
            <MovieCoverRating>
              <StyledCoverStarIcon />
              <RatingCover>
                {rating ? rating.toFixed(1).replace(".", ",") : ""}
                <MovieTileRatingCoverTen>/ 10</MovieTileRatingCoverTen>
              </RatingCover>
              <MovieCoverRatingVotes>{votes} votes</MovieCoverRatingVotes>
            </MovieCoverRating>
          </MovieCoverInfo>
        </MovieCoverWrapper>
      )}
    </>
  );
};
