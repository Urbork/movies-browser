import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { selectMovieDetailsContent, setMovieDetailsId } from "../movies/moviesSlice";
import { MovieCover } from "./MovieCover";
import { Details } from "../../components/Details";

export const MovieDetails = () => {
  const { id } = useParams();
  // tutaj pobierane jest id filmu lub aktora, w którego kliknęliśmy
  const dispatch = useDispatch();
  dispatch(setMovieDetailsId(id));
  /*
  dispatch w tym miejscu działa, ale powoduje to, że po wejściu w szczegóły
  filmu lub aktora, stan jest ciągle zmieniany/ odświeżany. Mimo że wszystko pokazuje
  się właściwie, to w konsoli lub we wtyczce Redux do przeglądarki, widać
  że stan ciągle "pracuje".
  Poza tym, wyświetlanie działa właściwie (chyba), jak wejdziemy w szczegóły i się
  cofniemy w przeglądarce, to wrócimy do miejsca w którym byliśmy wcześniej, więc
  poza umiejscowieniem tego dispatch, wydaje się że wszystko jest ok
  */
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
