import Navigation from "./components/Navigation";
import { Pagination } from "./components/Pagination";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import { PeopleDetails } from "./features/PeopleDetails";
import PeopleList from "./components/PeopleList";
import { useSelector } from "react-redux";
import {
  selectGenres,
  selectMovieDetailsContent,
  selectMovieDetailsCredits,
  selectPopularMovies
} from "./features/movies/moviesSlice";
import {
  selectCurrentPage,
  selectDisplay,
  selectFetchStatus,
  selectFirstPage,
  selectLastPage
} from "./features/pageState/pageStateSlice";
import { ErrorPage, LoadingPage } from "./components/Modal";

function App() {

  //  To be removed at the end  //
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
      {fetchStatus === "loading" && <LoadingPage>loading</LoadingPage>}
      {fetchStatus === "error" && <ErrorPage>error</ErrorPage>}
      {fetchStatus === "ready" &&
        <>
          <Container>
            {display === "movies" && <MoviesList />}
            {display === "movieDetails" && <MovieDetails />}
            {display === "people" && <PeopleList />}
            {display === "person" && <PeopleDetails />}
          </Container >
          {(display === "movies" || display === "people") && <Pagination />}
        </>
      }
    </>
  );
};

export default App;