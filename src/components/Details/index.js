import {
  DetailsWrapper,
  DetailsImage,
  DetailsInfo,
  DetailsTitle,
  DetailsSubtitle,
  DetailsExtraInfoContainer,
  DetailsExtraInfo,
  DetailsExtraInfoLabel,
  DetailsDescription,
} from "./styled";
import { MovieTags } from "../MovieTags";
import { MovieRating } from "../MovieRating";
import { useDispatch, useSelector } from "react-redux";
import blankProfile from "../../assets/blankProfile.svg";
import noPoster from "../../assets/noPoster.svg";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  selectShowContent,
  setShowContent,
} from "../../features/pageStateSlice";

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
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const noImage = pathName === "movies" ? noPoster : blankProfile;
  const showContent = useSelector(selectShowContent);
  const onLoadHandler = () => {
    !showContent && dispatch(setShowContent());
  };

  return (
    <>
      <DetailsWrapper onLoad={onLoadHandler}>
        <DetailsImage
          src={poster ? imageURL + poster : noImage}
          alt={`${title} poster`}
        />
        <DetailsInfo>
          <DetailsTitle>{title}</DetailsTitle>
          {movies ? <DetailsSubtitle>{subtitle}</DetailsSubtitle> : ""}
          <DetailsExtraInfoContainer>
            {movies && (
              <DetailsExtraInfo>
                <div>
                  <DetailsExtraInfoLabel $hidden>
                    {detailsExtraInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsExtraInfo}
                </div>
                <div>
                  <DetailsExtraInfoLabel $hidden>
                    {detailsDateInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsDateInfo}
                </div>
              </DetailsExtraInfo>
            )}
            {people && (
              <DetailsExtraInfo>
                <div>
                  <DetailsExtraInfoLabel>
                    {detailsDateInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsDateInfo}
                </div>
                <div>
                  <DetailsExtraInfoLabel>
                    {detailsExtraInfoTitle}
                  </DetailsExtraInfoLabel>{" "}
                  {detailsExtraInfo}
                </div>
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
  );
};
