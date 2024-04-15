import {
  DetailsWrapper,
  DetailsImage,
  DetailsInfo,
  DetailsTitle,
  DetailsSubtitle,
  DetailsExtraInfoContainer,
  DetailsExtraInfo,
  DetailsExtraInfoWrapper,
  DetailsExtraInfoLabel,
  DetailsDescription,
} from "./styled";
import { MovieTags } from "../MovieTile/MovieTags";
import { MovieRating } from "../MovieTile/MovieRating";
import { useEffect, useState } from "react";

export const Details = ({
  movies,
  people,
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
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {  
    const delay = movies ? 1500 : 500;
    const timer = setTimeout(() => {
      setShow(true)
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <DetailsWrapper $show={show}>
        <DetailsImage
          src={imageURL + poster}
          alt={`${title} ${movies ? "movies" : "person"} poster`}
        />
        <DetailsInfo>
          <DetailsTitle>{title}</DetailsTitle>
          {movies ? <DetailsSubtitle>{subtitle}</DetailsSubtitle> : ""}
          <DetailsExtraInfoContainer>
            {movies && (
              <DetailsExtraInfo>
                <DetailsExtraInfoWrapper>
                  <DetailsExtraInfoLabel $hidden>
                    {detailsExtraInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsExtraInfo}
                </DetailsExtraInfoWrapper>
                <DetailsExtraInfoWrapper>
                  <DetailsExtraInfoLabel $hidden>
                    {detailsDateInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsDateInfo}
                </DetailsExtraInfoWrapper>
              </DetailsExtraInfo>
            )}
            {people && (
              <DetailsExtraInfo>
                <DetailsExtraInfoWrapper>
                  <DetailsExtraInfoLabel>
                    {detailsDateInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsDateInfo}
                </DetailsExtraInfoWrapper>
                <DetailsExtraInfoWrapper>
                  <DetailsExtraInfoLabel>
                    {detailsExtraInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsExtraInfo}
                </DetailsExtraInfoWrapper>
              </DetailsExtraInfo>
            )}
          </DetailsExtraInfoContainer>
          {movies ? (
            <>
              <MovieTags tags={tags ? tags.map((tag) => tag.name) : ""} />
              <MovieRating big="false" rating={rating} votes={votes} />
            </>
          ) : (
            ""
          )}
        </DetailsInfo>
        <DetailsDescription>{description}</DetailsDescription>
      </DetailsWrapper>
    </>
  )
};
