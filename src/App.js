import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "./components/Navigation";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import { PeopleDetails } from "./features/PeopleDetails";
import PeopleList from "./components/PeopleList";
import { useSelector } from "react-redux";
import { selectFirstMoviePage } from "./features/pageState/pageStateSlice";
import { toMovieDetails, toMoviesList, toPeopleDetails, toPeopleList } from "./routes";

function App() {
  const firstMoviePage = useSelector(selectFirstMoviePage);

  return (
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
            <MoviesList />
          </Route>
          <Route path={toPeopleList()}>
            <PeopleList />
          </Route>
          <Route path="/">
            <Redirect to={toMoviesList({ page: firstMoviePage })} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
