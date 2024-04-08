import {
  DetailsWrapper,
  DetailsImage,
  DetailsTitle,
  DetailsSubtitle,
  DetailsInfo,
  DetailsExtraInfoContainer,
  DetailsExtraInfo,
  DetailsExtraInfoLabel,
  DetailsDescription,
  DetailsSection,
  DetailsHeading,
} from "./styled";
import { MovieTags } from "../MovieTile/MovieTags";
import { MovieRating } from "../MovieTile/MovieRating";

export const Details = ({
  movies,
  imageURL,
  poster,
  title,
  subtitle,
  detailsExtraInfoTitle,
  detailsExtraInfo,
  detailsDateInfoTitle,
  detailsDateInfo,
  tags,
  rating,
  votes,
  description,
  castHeading,
  castContent,
  crewHeading,
  crewContent,
}) => (
  <>
    <DetailsWrapper>
      <DetailsImage
        src={imageURL + poster}
        alt={`${title} ${movies ? "movies" : "person"} poster`}
      />
      <DetailsInfo>
        <DetailsTitle>{title}</DetailsTitle>
        {movies ?
          <DetailsSubtitle>{subtitle}</DetailsSubtitle> : ""
        }
        <DetailsExtraInfoContainer>
          <DetailsExtraInfo>
            {movies ?
              <>
                <DetailsExtraInfoLabel>
                  {detailsExtraInfoTitle}
                </DetailsExtraInfoLabel>{" "}
                {detailsExtraInfo}
              </>
              :
              <>
                <DetailsExtraInfoLabel>
                  {detailsDateInfoTitle}
                </DetailsExtraInfoLabel>{" "}
                {detailsDateInfo}
              </>
            }
          </DetailsExtraInfo>
          <DetailsExtraInfo>
            {movies ?
              <>
                <DetailsExtraInfoLabel>
                  {detailsDateInfoTitle}
                </DetailsExtraInfoLabel>{" "}
                {detailsDateInfo}
              </>
              :
              <>
                <DetailsExtraInfoLabel>
                  {detailsExtraInfoTitle}
                </DetailsExtraInfoLabel>{" "}
                {detailsExtraInfo}
              </>
            }
          </DetailsExtraInfo>
        </DetailsExtraInfoContainer>
        {movies ?
          <>
            <MovieTags tags={tags ? tags.map((tag) => tag.name) : ""} />
            <MovieRating big="true" rating={rating} votes={votes} />
          </>
          : ""
        }
      </DetailsInfo>
      <DetailsDescription>{description}</DetailsDescription>
    </DetailsWrapper>
    <DetailsSection>
      <DetailsHeading>{castHeading}</DetailsHeading>
      {castContent}
    </DetailsSection>
    <DetailsSection>
      <DetailsHeading>{crewHeading}</DetailsHeading>
      {crewContent}
    </DetailsSection>
  </>
);
