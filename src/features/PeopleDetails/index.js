import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../components/Details";
import { selectPersonContent, selectPersonId, setPersonId, selectPersonDetailsCreditsCast, selectPersonDetailsCreditsCrew } from "../people/peopleSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Section } from "../../components/Section";
import { MoviesListWrapper } from "../../features/MoviesList/styled";
import { selectMobile } from "../pageState/pageStateSlice";
import { profileMainSizeUrl } from "../../api/api";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres } from "../movies/moviesSlice";
import { useEffect } from "react";

export const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const personDetailsId = useSelector(selectPersonId);

  useEffect(() => {
    if (id !== personDetailsId) {
      dispatch(setPersonId(id));
    }
  }, [id, personDetailsId, dispatch]);

  const personContent = useSelector(selectPersonContent);
  const mobile = useSelector(selectMobile);

  const creditsCast = useSelector(selectPersonDetailsCreditsCast);
  const creditsCrew = useSelector(selectPersonDetailsCreditsCrew);
  const genres = useSelector(selectGenres);


  return (
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
          detailsDateInfo={personContent?.birthday?.split("-").reverse().join(".")}
          description={personContent?.biography}
        />
      </Section>
      <Section title={`Movies - cast (${creditsCast?.length})`}>
        <MoviesListWrapper>
          {creditsCast?.map((movie) => (
            <MovieTile
              key={movie.credit_id}
              poster={movie.poster_path}
              title={movie.title}
              subtitle={`${movie.character} (${movie.release_date.split("-")[0]})`}
              tags={movie.genre_ids?.map(
                (genreId) => genres.find((item) => item.id === genreId)?.name
              )}
              rating={movie.vote_average}
              votes={movie.vote_count}
              id={movie.id}
            />
          ))}
        </MoviesListWrapper>
      </ Section>
      <Section title={`Movies - crew (${creditsCrew?.length})`} mobile={mobile}>
        <MoviesListWrapper>
          {creditsCrew?.map((movie) => (
            <MovieTile
              key={movie.credit_id}
              poster={movie.poster_path}
              title={movie.title}
              subtitle={`${movie.job} (${movie.release_date.split("-")[0]})`}
              tags={movie.genre_ids?.map(
                (genreId) => genres.find((item) => item.id === genreId)?.name
              )}
              rating={movie.vote_average}
              votes={movie.vote_count}
              id={movie.id}
            />
          ))}
        </MoviesListWrapper>
      </Section>
    </>
  )
};
