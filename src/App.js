import Navigation from "./components/Navigation";
import { Pagination } from "./components/Pagination";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import PeopleList from "./components/PeopleList";
import { useSelector } from "react-redux";
import { selectCurrentPage, selectDisplay, selectFetchStatus, selectFirstPage, selectGenres, selectLastPage, selectMovieDetailsContent, selectMovieDetailsCredits, selectPopularMovies } from "./features/MoviesList/moviesSlice";

function App() {
  const display = useSelector(selectDisplay);
  const popularMovies = useSelector(selectPopularMovies);
  const movieDetailsContent = useSelector(selectMovieDetailsContent);
  const movieDetailsCredits = useSelector(selectMovieDetailsCredits);
  const genres = useSelector(selectGenres);
  const fetchStatus = useSelector(selectFetchStatus);
  const firstPage = useSelector(selectFirstPage);
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectLastPage);

  console.log("display: ", display);
  console.log("popularMovies: ", popularMovies);
  console.log("movieDetailsContent: ", movieDetailsContent);
  console.log("movieDetailsCredits: ", movieDetailsCredits);
  console.log("genres: ", genres);
  console.log("fetchStatus: ", fetchStatus);
  console.log("firstPage: ", firstPage, "currentPage :", currentPage, "lastPage :", lastPage);

  return (
    <>
      <Navigation />
      {fetchStatus === "loading" && <h2>ŁADOWANIE</h2>}
      {fetchStatus === "error" && <h2>BŁĄD</h2>}
      <Container>
        {display === "movies" &&
          <>
            <MoviesList />
            <Pagination />
          </>
        }
        {display === "movieDetails" && <MovieDetails />}
        {display === "people" && <PeopleList />}
      </Container>

    </>
  );
};

export default App;