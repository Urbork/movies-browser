import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../../components/Details";
import {
  selectPersonContent,
  selectPersonId,
  setPersonId,
  selectPersonDetailsCreditsCast,
  selectPersonDetailsCreditsCrew,
} from "../peopleSlice";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Section } from "../../../components/Section";
import { MoviesWrapper } from "../../../components/MoviesWrapper";
import {
  fetchApi,
  selectFetchStatus,
  selectMobile,
} from "../../../pageStateSlice";
import { profileMainSizeUrl } from "../../../api/api";
import { selectGenres } from "../../movies/moviesSlice";
import { useEffect } from "react";
import { LoadingPage } from "../../../components/LoadingPage";
import { ErrorPage } from "../../../components/ErrorPage";
import { MovieTile } from "../../../components/MovieTile";

export const PeopleDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const personDetailsId = useSelector(selectPersonId);
  const personContent = useSelector(selectPersonContent);
  const mobile = useSelector(selectMobile);
  const creditsCast = useSelector(selectPersonDetailsCreditsCast);
  const creditsCrew = useSelector(selectPersonDetailsCreditsCrew);
  const genres = useSelector(selectGenres);
  const fetchStatus = useSelector(selectFetchStatus);
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    dispatch(fetchApi({ pathName, id }));
    // if (id !== personDetailsId) {
    //   dispatch(setPersonId(id));
    // }
  }, [pathName, id]);
  // window.scrollTo(0, 0);

  return (
    <>
      {fetchStatus === "loading" && <LoadingPage />}
      {fetchStatus === "error" && <ErrorPage />}
      {fetchStatus === "ready" && (
        <>
          <Section>
            <Details
              people
              imageURL={profileMainSizeUrl}
              poster={personContent?.profile_path}
              title={personContent?.name}
              detailsExtraInfoTitle="Place of birth:"
              detailsExtraInfo={personContent?.place_of_birth}
              detailsDateInfoTitle={mobile ? "Birth:" : "Date of birth:"}
              detailsDateInfo={personContent?.birthday
                ?.split("-")
                .reverse()
                .join(".")}
              description={personContent?.biography}
            />
          </Section>
          {creditsCast?.length > 0 && (
            <Section title={`Movies - cast (${creditsCast?.length})`}>
              <MoviesWrapper>
                {creditsCast?.map((movie) => (
                  <MovieTile
                    key={movie.credit_id}
                    poster={movie.poster_path}
                    title={movie.title}
                    subtitle={`${movie.character} (${
                      movie.release_date.split("-")[0]
                    })`}
                    tags={movie.genre_ids}
                    genres={genres}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                    id={movie.id}
                  />
                ))}
              </MoviesWrapper>
            </Section>
          )}
          {creditsCrew?.length > 0 && (
            <Section
              title={`Movies - crew (${creditsCrew?.length})`}
              mobile={mobile}
            >
              <MoviesWrapper>
                {creditsCrew?.map((movie) => (
                  <MovieTile
                    key={movie.credit_id}
                    poster={movie.poster_path}
                    title={movie.title}
                    subtitle={`${movie.job} (${
                      movie.release_date.split("-")[0]
                    })`}
                    tags={movie.genre_ids}
                    genres={genres}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                    id={movie.id}
                  />
                ))}
              </MoviesWrapper>
            </Section>
          )}
        </>
      )}
    </>
  );
};
