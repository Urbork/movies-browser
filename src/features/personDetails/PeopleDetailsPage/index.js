import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../../components/Details";
import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Section } from "../../../components/Section";
import { MoviesWrapper } from "../../../components/MoviesWrapper";
import {
  fetchApi,
  selectMobile,
  selectShowContent,
} from "../../pageStateSlice";
import { profileMainSizeUrl } from "../../../api/api";
import { selectGenres } from "../../movies/moviesSlice";
import { useEffect } from "react";
import { MovieTile } from "../../../components/MovieTile";
import {
  selectPersonContent,
  selectPersonDetailsCreditsCast,
  selectPersonDetailsCreditsCrew,
} from "../peopleDetailSlice";
import { Page } from "../../../components/Page";

export const PeopleDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const personContent = useSelector(selectPersonContent);
  const mobile = useSelector(selectMobile);
  const creditsCast = useSelector(selectPersonDetailsCreditsCast);
  const creditsCrew = useSelector(selectPersonDetailsCreditsCrew);
  const genres = useSelector(selectGenres);
  const location = useLocation();
  const fullPathName = location.pathname;
  const showContent = useSelector(selectShowContent);

  useEffect(() => {
    dispatch(fetchApi({ pathName: fullPathName, id }));
  }, [fullPathName, id, dispatch]);

  return (
    <Page
      children={
        <>
          <Section show={showContent}>
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
            <Section
              show={showContent}
              title={`Movies - cast (${creditsCast?.length})`}
            >
              <MoviesWrapper $show={showContent}>
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
              show={showContent}
            >
              <MoviesWrapper $show={showContent}>
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
      }
    />
  );
};
