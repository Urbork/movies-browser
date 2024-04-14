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
import { useEffect, useState } from "react";
import vignette from "../../../images/VignetteEffect.svg";

export const MovieCover = ({ cover, title, rating, votes }) => {
  const [loaded, setLoaded] = useState(false);
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true)
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MovieCoverWrapper $show={loaded}>
        <MovieCoverBlackBars />
        <MovieCoverImage
          src={"https://image.tmdb.org/t/p/original" + cover}
          alt={`${title} movie cover image`}
          onLoad={() => setLoaded(true)}
          $show={delay}
        />
        <MovieCoverEffect src={vignette} />
        <MovieCoverInfo $show={delay}>
          <MovieCoverTitle>{title}</MovieCoverTitle>
          <MovieCoverRating>
            <StyledStarIcon $big="true" />
            {rating ? rating.toFixed(1).replace(".", ",") : ""}
          </MovieCoverRating>
          <MovieCoverRatingVotes>{votes} votes</MovieCoverRatingVotes>
        </MovieCoverInfo>
      </MovieCoverWrapper>
    </>
  )
};