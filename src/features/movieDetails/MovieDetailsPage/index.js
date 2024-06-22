import { useDispatch, useSelector } from "react-redux";
import { MovieCover } from "./MovieCover";
import { Details } from "../../../components/Details";
import { Section } from "../../../components/Section";
import { PeopleWrapper } from "../../../components/PeopleWrapper";
import {
  fetchApi,
  selectMobile,
  selectShowContent,
} from "../../pageStateSlice";
import { posterMainSizeUrl } from "../../../api/api";
import PeopleTile from "../../../components/PeopleTile";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import {
  selectMovieDetailsContent,
  selectMovieDetailsCreditsCast,
  selectMovieDetailsCreditsCrew,
} from "../movieDetailsSlice";
import { Page } from "../../../components/Page";

export const MovieDetailsPage = () => {
  const movieDetailsContent = useSelector(selectMovieDetailsContent);
  const mobile = useSelector(selectMobile);
  const creditsCast = useSelector(selectMovieDetailsCreditsCast);
  const creditsCrew = useSelector(selectMovieDetailsCreditsCrew);
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const fullPathName = location.pathname;
  const showContenet = useSelector(selectShowContent);

  useEffect(() => {
    dispatch(fetchApi({ pathName: fullPathName, id }));
  }, [fullPathName, id, dispatch]);

  return (
    <Page
      children={
        <>
          <MovieCover
            cover={movieDetailsContent?.backdrop_path}
            title={movieDetailsContent?.title}
            rating={movieDetailsContent?.vote_average}
            votes={movieDetailsContent?.vote_count}
          />
          <Section show={showContenet} delay>
            <Details
              movies
              imageURL={posterMainSizeUrl}
              poster={movieDetailsContent?.poster_path}
              title={movieDetailsContent?.title}
              subtitle={movieDetailsContent?.release_date?.split("-")[0]}
              detailsExtraInfoTitle="Production:"
              detailsExtraInfo={movieDetailsContent?.production_countries.map(
                (country, index) => (
                  <span key={index}>{country.name}</span>
                )
              )}
              detailsDateInfoTitle="Release date: "
              detailsDateInfo={movieDetailsContent?.release_date
                ?.split("-")
                .reverse()
                .join(".")}
              tags={movieDetailsContent?.genres}
              rating={movieDetailsContent?.vote_average}
              votes={movieDetailsContent?.vote_count}
              description={movieDetailsContent?.overview}
            />
          </Section>
          {creditsCast?.length > 0 && (
            <Section title="Cast" show={showContenet} delay>
              <PeopleWrapper $show={showContenet}>
                {creditsCast?.map((person) => (
                  <PeopleTile
                    key={person.credit_id}
                    id={person.id}
                    profile={person.profile_path}
                    name={person.name}
                    role={person.character}
                  />
                ))}
              </PeopleWrapper>
            </Section>
          )}
          {creditsCrew?.length > 0 && (
            <Section title="Crew" show={showContenet} delay mobile={mobile}>
              <PeopleWrapper $addSpace={true} $show={showContenet}>
                {creditsCrew?.map((person) => (
                  <PeopleTile
                    key={person.credit_id}
                    id={person.id}
                    profile={person.profile_path}
                    name={person.name}
                    role={person.department}
                  />
                ))}
              </PeopleWrapper>
            </Section>
          )}
        </>
      }
    />
  );
};
