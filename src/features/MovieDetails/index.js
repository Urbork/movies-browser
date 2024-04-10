import { Details } from "../../components/Details";
import { MovieCover } from "./MovieCover";

export const MovieDetails = ({ movieDetails }) => (
  <>
    <MovieCover
      cover={movieDetails?.backdrop_path}
      title={movieDetails?.title}
      rating={movieDetails?.vote_average}
      votes={movieDetails?.vote_count}
    />
    <Details
      movies
      imageURL="https://image.tmdb.org/t/p/w342"
      poster={movieDetails?.poster_path}
      title={movieDetails?.title}
      subtitle={movieDetails?.release_date?.split("-")[0]}
      detailsExtraInfoTitle="Production:"
      detailsExtraInfo={movieDetails?.production_countries.map((country, index) => (
        <span key={index}>{country.name}</span>
      ))}
      detailsDateInfoTitle="Release date: "
      detailsDateInfo={movieDetails?.release_date?.split("-").reverse().join(".")}
      tags={movieDetails?.genres}
      rating={movieDetails?.vote_average}
      votes={movieDetails?.vote_count}
      description={movieDetails?.overview}
      castHeading="Cast"
      castContent="Movie cast here"
      crewHeading="Crew"
      crewContent="Movie crew here"
    />
  </>
);
