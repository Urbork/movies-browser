import { useDispatch, useSelector } from "react-redux";
import {
  selectMovieDetailsCreditsCast,
  selectMovieDetailsCreditsCrew,
  selectMovieDetailsContent,
  selectMovieDetailsId,
  setMovieDetailsId
} from "../movies/moviesSlice";
import { MovieCover } from "./MovieCover";
import { Details } from "../../components/Details";
import { Section } from "../../components/Section";
import { Wrapper } from "../../components/PeopleList/styled";
import { selectFetchStatus, selectMobile } from "../pageState/pageStateSlice";
import { posterMainSizeUrl } from "../../api/api";
import PeopleTile from "../../components/PeopleList/PeopleTile";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { LoadingPage } from "../../components/LoadingPage";
import { ErrorPage } from "../../components/ErrorPage";

export const MovieDetails = () => {
  const movieDetailsContent = useSelector(selectMovieDetailsContent);
  const mobile = useSelector(selectMobile);
  const creditsCast = useSelector(selectMovieDetailsCreditsCast);
  const creditsCrew = useSelector(selectMovieDetailsCreditsCrew);
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetailsId = useSelector(selectMovieDetailsId);
  const fetchStatus = useSelector(selectFetchStatus);

  useEffect(() => {
    if (id !== movieDetailsId) {
      dispatch(setMovieDetailsId(id));
    }
  }, [id, movieDetailsId, dispatch]);

  return (
    <>
      {(fetchStatus === "loading") && <LoadingPage />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" &&
        <>
          <MovieCover
            cover={movieDetailsContent?.backdrop_path}
            title={movieDetailsContent?.title}
            rating={movieDetailsContent?.vote_average}
            votes={movieDetailsContent?.vote_count}
          />
          <Section>
            <Details
              movies
              imageURL={posterMainSizeUrl}
              poster={movieDetailsContent?.poster_path}
              title={movieDetailsContent?.title}
              subtitle={movieDetailsContent?.release_date?.split("-")[0]}
              detailsExtraInfoTitle="Production:"
              detailsExtraInfo={movieDetailsContent?.production_countries.map((country, index) => (
                <span key={index}>{country.name}</span>
              ))}
              detailsDateInfoTitle="Release date: "
              detailsDateInfo={movieDetailsContent?.release_date?.split("-").reverse().join(".")}
              tags={movieDetailsContent?.genres}
              rating={movieDetailsContent?.vote_average}
              votes={movieDetailsContent?.vote_count}
              description={movieDetailsContent?.overview}
            />
          </ Section>
          <Section title="Cast">
            <Wrapper >
              {creditsCast?.map((person) => (
                <PeopleTile
                  key={person.credit_id}
                  id={person.id}
                  profile={person.profile_path}
                  name={person.name}
                  role={person.character}
                />
              ))}
            </Wrapper>
          </ Section>
          <Section title="Crew" mobile={mobile}>
            <Wrapper $addSpace="true">
              {creditsCrew?.map((person) => (
                <PeopleTile
                  key={person.credit_id}
                  id={person.id}
                  profile={person.profile_path}
                  name={person.name}
                  role={person.department}
                />
              ))}
            </Wrapper>
          </ Section>
        </>
      }
    </>
  )
};
