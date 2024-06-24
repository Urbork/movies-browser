import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "./Navigation";
import { Container } from "../../components/Container";
import { MovieDetailsPage } from "../../features/movieDetails/MovieDetailsPage";
import { MoviesPage } from "../../features/movies/MoviesPage";
import { PeopleDetailsPage } from "../../features/personDetails/PeopleDetailsPage";
import { PeoplePage } from "../../features/people/PeoplePage";
import {
  toMovieDetailsPage,
  toMoviesPage,
  toPeopleDetailsPage,
  toPeoplePage,
} from "../../utils/routes";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Switch>
          <Route path={toMovieDetailsPage()}>
            <MovieDetailsPage />
          </Route>
          <Route path={toPeopleDetailsPage()}>
            <PeopleDetailsPage />
          </Route>
          <Route path={toMoviesPage()}>
            <MoviesPage />
          </Route>
          <Route path={toPeoplePage()}>
            <PeoplePage />
          </Route>
          <Route path="/">
            <Redirect to={toMoviesPage()} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
