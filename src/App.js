import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "./components/Navigation";
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
  selectPopularMovies,
} from "./features/movies/moviesSlice";
import {
  selectCurrentPage,
  selectDisplay,
  selectFetchStatus,
  selectFirstPage,
  selectLastPage,
} from "./features/pageState/pageStateSlice";
import { ErrorPage } from "./components/ErrorPage";
import { LoadingPage } from "./components/LoadingPage";
import { toMovieDetails, toMoviesList, toPeopleDetails, toPeopleList } from "./routes";

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
    <>
      <HashRouter>
        <Navigation />
        <Container>
          <Switch>
            <Route path={toMovieDetails()}>
              <MovieDetails />
            </Route>
            <Route path={toPeopleDetails()}>
              <PeopleDetails />
            </Route>
            <Route path={toMoviesList()}>
              {fetchStatus === "loading" ? <LoadingPage /> : <MoviesList />}
            </Route>
            <Route path={toPeopleList()}>
              {fetchStatus === "loading" ? <LoadingPage /> : <PeopleList />}
            </Route>
            <Route path="/">
              <Redirect to={toMoviesList()} />
            </Route>
          </Switch>
        </Container>
        <Pagination />
      </HashRouter>
      {/*
        Na razie Paginacja pojawia się na każdej stronie, nie jest obsłużone ładowanie dla MovieDetails i PeopleDetails.
        Najpierw zajmowałem się samym działaniem routera, a obsłużenie tego chciałem na sam koniec zostawić.
      */}

      {/* poniżej stary kod, ale chwilowo go zostawiłem */}

      {/* <Container>
        {fetchStatus === "loading" && <LoadingPage>loading</LoadingPage>}
        {fetchStatus === "error" && <ErrorPage>error</ErrorPage>}
        {fetchStatus === "ready" && (
          <>
            {display === "movies" && <MoviesList />}
            {display === "movieDetails" && <MovieDetails />}
            {display === "people" && <PeopleList />}
            {display === "person" && <PeopleDetails />}
            {(display === "movies" || display === "people") && <Pagination />}
          </>
        )}
      </Container> */}
    </>
  );
}

export default App;
