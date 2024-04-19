import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectMovieDetailsContent, selectMovieDetailsId, setMovieDetailsId } from "../movies/moviesSlice";
import { MovieCover } from "./MovieCover";
import { Details } from "../../components/Details";
import { selectFetchStatus } from "../pageState/pageStateSlice";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetailsId = useSelector(selectMovieDetailsId);

  if (id !== movieDetailsId) {
    dispatch(setMovieDetailsId(id));
  }
  const movieDetailsContent = useSelector(selectMovieDetailsContent);

  return (
    <>
      <MovieCover
        cover={movieDetailsContent?.backdrop_path}
        title={movieDetailsContent?.title}
        rating={movieDetailsContent?.vote_average}
        votes={movieDetailsContent?.vote_count}
      />
      <Details
        movies
        id={id}
        imageURL="https://image.tmdb.org/t/p/w342"
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
        castHeading="Cast"
        castContent="Movie cast here"
        crewHeading="Crew"
        crewContent="Movie crew here"
      />
    </>
  )
};
