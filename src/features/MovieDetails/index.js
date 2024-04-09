import { selectMovieDetails, selectMovieDetailsContent } from "../MoviesList/moviesSlice";
import { MovieCover } from "./MovieCover";
import { MovieInfo } from "./MovieInfo";
import { MovieDetailsSection, MovieDetailsHeading } from "./styled";
import { useSelector } from "react-redux";


export const MovieDetails = () => {
  const movieDetailsContent = useSelector(selectMovieDetailsContent);


  return (
    <>
      <MovieCover
        cover={movieDetailsContent.backdrop_path}
        title={movieDetailsContent.title}
        rating={movieDetailsContent.vote_average}
        votes={movieDetailsContent.vote_count}
      />
      <MovieInfo
        poster={movieDetailsContent.poster_path}
        title={movieDetailsContent.title}
        subtitle={movieDetailsContent.release_date?.split("-")[0]}
        production={movieDetailsContent.production_countries?.map((country, index) => (
          <span key={index}>{country.name}</span>
        ))}
        releaseDate={movieDetailsContent.release_date}
        tags={movieDetailsContent.genres}
        rating={movieDetailsContent.vote_average}
        votes={movieDetailsContent.vote_count}
        description={movieDetailsContent.overview}
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
  )
};
