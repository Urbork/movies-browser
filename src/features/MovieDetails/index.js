import { useSelector } from "react-redux";
import { selectMovieDetailsContent } from "../movies/moviesSlice";
import { MovieCover } from "./MovieCover";
import { Details } from "../../components/Details";
import { Section } from "../../components/Section";
import { Wrapper } from "../../components/PeopleList/styled";
import { selectMobile } from "../pageState/pageStateSlice";
import { posterMainSizeUrl } from "../../api/api";

export const MovieDetails = () => {
  const movieDetailsContent = useSelector(selectMovieDetailsContent);
  const mobile = useSelector(selectMobile);

  return (
    <>
      <MovieCover
        cover={movieDetailsContent.backdrop_path}
        title={movieDetailsContent.title}
        rating={movieDetailsContent.vote_average}
        votes={movieDetailsContent.vote_count}
      />
      <Section>
        <Details
          movies
          imageURL={posterMainSizeUrl}
          poster={movieDetailsContent.poster_path}
          title={movieDetailsContent.title}
          subtitle={movieDetailsContent.release_date?.split("-")[0]}
          detailsExtraInfoTitle="Production:"
          detailsExtraInfo={movieDetailsContent.production_countries.map((country, index) => (
            <span key={index}>{country.name}</span>
          ))}
          detailsDateInfoTitle="Release date: "
          detailsDateInfo={movieDetailsContent.release_date?.split("-").reverse().join(".")}
          tags={movieDetailsContent.genres}
          rating={movieDetailsContent.vote_average}
          votes={movieDetailsContent.vote_count}
          description={movieDetailsContent.overview}
        />
      </ Section>
      <Section title="Cast">
        <Wrapper>
          Cast here
        </Wrapper>
      </ Section>
      <Section title="Crew" mobile={mobile}>
        <Wrapper>
          Crew here
        </Wrapper>
      </ Section>
    </>
  )
};
