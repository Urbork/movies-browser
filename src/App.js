import { HashRouter, Switch, Route, Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "./components/Navigation";
import { Pagination } from "./components/Pagination";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import { PeopleDetails } from "./features/PeopleDetails";
import PeopleList from "./components/PeopleList";
import { LoadingPage } from "./components/LoadingPage";
import { ErrorPage } from "./components/ErrorPage";
import { useSelector } from "react-redux";
import {
  selectGenres,
  selectMovieDetailsContent,
  selectMovieDetailsCredits,
  selectPopularMovies,
} from "./features/movies/moviesSlice";
import {
  selectCurrentPage,
  selectDisplay,
  selectFetchStatus,
  selectFirstPage,
  selectLastPage,
} from "./features/pageState/pageStateSlice";
import {
  toMovieDetails,
  toMoviesList,
  toPeopleDetails,
  toPeopleList
} from "./routes";

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
  console.log(
    "firstPage: ",
    firstPage,
    "currentPage :",
    currentPage,
    "lastPage :",
    lastPage
  );

  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Switch>
          <Route path={toMovieDetails()}>
            {fetchStatus === "loading" && <LoadingPage />}
            {fetchStatus === "error" && <ErrorPage />}
            {fetchStatus === "ready" && <MovieDetails />}
          </Route>
          <Route path={toPeopleDetails()}>
            {fetchStatus === "loading" && <LoadingPage />}
            
            {fetchStatus === "error" && <ErrorPage />}
            {fetchStatus === "ready" && <PeopleDetails />}
          </Route>
          <Route path={toMoviesList()}>
            <MoviesList />
          </Route>
          <Route path={toPeopleList()}>
            <PeopleList />
          </Route>
          <Route path="/">
            <Redirect to={toMoviesList()} />
          </Route>
        </Switch>
      </Container>
      <Pagination />
    </HashRouter>
  );
}

export default App;
