import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
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
import { selectFetchStatus, selectFirstMoviePage } from "./features/pageState/pageStateSlice";

function App() {
  const fetchStatus = useSelector(selectFetchStatus);
  const firstMoviePage = useSelector(selectFirstMoviePage);

  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/movies/:page">
            {fetchStatus === "loading" && <LoadingPage />}
            {fetchStatus === "error" && <ErrorPage />}
            {fetchStatus === "ready" &&
              <>
                <MoviesList />
                <Pagination />
              </>
            }
          </Route>
          <Route path="/people/:page">
            {fetchStatus === "loading" && <LoadingPage />}
            {fetchStatus === "error" && <ErrorPage />}
            {fetchStatus === "ready" &&
              <>
                <PeopleList />
                <Pagination />
              </>
            }
          </Route>
          <Route path="/moviesDetails/:id">
            {fetchStatus === "loading" && <LoadingPage />}
            {fetchStatus === "error" && <ErrorPage />}
            {fetchStatus === "ready" && <MovieDetails />}
          </Route>
          <Route path="/peopleDetails/:id">
            {fetchStatus === "loading" && <LoadingPage />}
            {fetchStatus === "error" && <ErrorPage />}
            {fetchStatus === "ready" && <PeopleDetails />}
          </Route>
          <Route path="/">
            <Redirect to={`/movies/${firstMoviePage}`} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
