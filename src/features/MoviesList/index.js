import { Section } from "../../components/Section";
import { MoviesListWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../components/MovieTile";
import { selectGenres, selectPopularMovies } from "../movies/moviesSlice";
import { selectCurrentPage, setCurrentPage, setImagesLoaded } from "../pageState/pageStateSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const MoviesList = () => {
  const popularMovies = useSelector(selectPopularMovies);
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  const { page } = useParams();
  const currentPage = useSelector(selectCurrentPage);
  console.log("page",page)
  console.log("useParams()",useParams())
  // const task = useSelector(state => selectTaskById(state, id));


   /// tu skączyłem  !!!!! - trzeba zrobic zapis numeru strony do url
   // initializeSaga zmienia stronę na 1
   // myślę że problem jest w tym kiedy strona jest wyświetlana (na jakich warunkach)

  if (page !== currentPage) {
    dispatch(setCurrentPage(page));  
  }

  return (
    <Section title="Popular movies">
      <MoviesListWrapper onLoad={() => dispatch(setImagesLoaded())}>
        {popularMovies?.map((movie) => (
          <MovieTile
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date.split("-")[0]}
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
  );
};
