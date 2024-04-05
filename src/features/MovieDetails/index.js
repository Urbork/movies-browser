import { MovieCover } from "./MovieCover";
import {
  MovieDetailsWrapper,
  MovieDetailsImage,
  MovieDetailsContent,
  MovieDetailsTitle,
  MovieDetailsSubtitle,
  MovieDetailsInfo,
  MovieDetailsExtraInfo,
  MovieDetailsExtraInfoLabel,
  MovieDetailsDescription,
  MovieDetailsSection,
  MovieDetailsHeading,
} from "./styled";
import {
  MovieTileTags,
  MovieTileTag,
  MovieTileRating,
  MovieTileRatingVotes,
  StyledStarIcon,
} from "../../components/MovieTile/styled";
import poster from "../../images/poster.png";

export const MovieDetails = ({
  image,
  title,
  subtitle,
  extraInfo,
  tags,
  score,
  description,
}) => (
  <>
    <MovieCover />
    <MovieDetailsWrapper>
      <MovieDetailsImage src={poster} alt={`${title} movie poster`} />
      <MovieDetailsContent>
        <MovieDetailsInfo>
          <MovieDetailsTitle>{title}</MovieDetailsTitle>
          <MovieDetailsSubtitle>{subtitle}</MovieDetailsSubtitle>
          <MovieDetailsExtraInfo>
            <MovieDetailsExtraInfoLabel>Production:</MovieDetailsExtraInfoLabel>{" "}
            China, United States of America
          </MovieDetailsExtraInfo>
          <MovieDetailsExtraInfo>
            <MovieDetailsExtraInfoLabel>
              Release date:
            </MovieDetailsExtraInfoLabel>{" "}
            24.10.2020
          </MovieDetailsExtraInfo>
          <MovieTileTags>
            <MovieTileTag>Action</MovieTileTag>
            <MovieTileTag>Adventure</MovieTileTag>
            <MovieTileTag>Drama</MovieTileTag>
            <MovieTileTag>
              Very long movie tag for this movie just to test it
            </MovieTileTag>
            <MovieTileTag>+18</MovieTileTag>
          </MovieTileTags>
          <MovieTileRating>
            <StyledStarIcon />
            4,20
            <MovieTileRatingVotes>69 votes</MovieTileRatingVotes>
          </MovieTileRating>
        </MovieDetailsInfo>
      </MovieDetailsContent>
      <MovieDetailsDescription>
        A young Chinese maiden disguises herself as a male warrior in order to
        save her father. Disguises herself as a male warrior in order to save
        her father. A young Chinese maiden disguises herself as a male warrior
        in order to save her father.
      </MovieDetailsDescription>
    </MovieDetailsWrapper>
    <MovieDetailsSection>
      <MovieDetailsHeading>Cast</MovieDetailsHeading>
      Movie Cast here
    </MovieDetailsSection>
    <MovieDetailsSection>
      <MovieDetailsHeading>Crew</MovieDetailsHeading>
      Movie Crew here
    </MovieDetailsSection>
  </>
);
