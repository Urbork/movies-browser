import { MovieCover } from "./MovieCover";
import { MovieInfo } from "./MovieInfo";
import { MovieDetailsSection, MovieDetailsHeading } from "./styled";

export const MovieDetails = ({ movieDetails }) => (
  <>
    <MovieCover
      cover={movieDetails?.backdrop_path}
      title={movieDetails?.title}
      rating={movieDetails?.vote_average}
      votes={movieDetails?.vote_count}
    />
    <MovieInfo
      poster={movieDetails?.poster_path}
      title={movieDetails?.title}
      subtitle={movieDetails?.release_date?.split("-")[0]}
      production={movieDetails?.production_countries.map((country, index) => (
        <span key={index}>{country.name}</span>
      ))}
      releaseDate={movieDetails?.release_date}
      tags={movieDetails?.genres}
      rating={movieDetails?.vote_average}
      votes={movieDetails?.vote_count}
      description={movieDetails?.overview}
    />
    <MovieDetailsSection>
      <MovieDetailsHeading>Cast</MovieDetailsHeading>
      Movie Cast here
    </MovieDetailsSection>
    <MovieDetailsSection>
      <MovieDetailsHeading>Crew</MovieDetailsHeading>
      Movie Crew here
    </MovieDetailsSection>
  </>
);
