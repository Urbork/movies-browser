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
import { useState } from "react";
import vignette from "../../../images/VignetteEffect.svg";

export const MovieCover = ({ cover, title, rating, votes }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <MovieCoverWrapper>
        <MovieCoverBlackBars />
        <MovieCoverImage
          src={"https://image.tmdb.org/t/p/original" + cover}
          alt={`${title} movie cover image`}
          onLoad={() => setLoaded(true)}
          $loaded={loaded}
        />
        <MovieCoverEffect src={vignette} />
        <MovieCoverInfo $loaded={loaded}>
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