import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "./Navigation";
import { Container } from "../components/Container";
import { MovieDetailsPage } from "../features/movies/MovieDetailsPage";
import { MoviesPage } from "../features/movies/MoviesPage";
import { PeopleDetailsPage } from "../features/people/PeopleDetailsPage";
import { PeoplePage } from "../features/people/PeoplePage";
import { useSelector } from "react-redux";
import { selectFirstMoviePage } from "../pageStateSlice";
import {
  toMovieDetailsPage,
  toMoviesPage,
  toPeopleDetailsPage,
  toPeoplePage,
} from "../routes";

function App() {
  const firstMoviePage = useSelector(selectFirstMoviePage);

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
            <Redirect to={toMoviesPage({ page: firstMoviePage })} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
