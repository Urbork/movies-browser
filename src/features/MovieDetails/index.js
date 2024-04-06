import { useState, useEffect } from "react";
import { MovieCover } from "./MovieCover";
import { MovieInfo } from "./MovieInfo";
import { MovieDetailsSection, MovieDetailsHeading } from "./styled";
import { getMovieDetails } from "../../api/fetchApi";

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const movieDetails = await getMovieDetails();
      setMovieDetails(movieDetails);
    };

    fetchApi();
  }, []);

  return (
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
        subtitle={movieDetails?.release_date.split("-")[0]}
        production={movieDetails?.production_countries.map((country) => (
          <span>{country.name}</span>
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
};
