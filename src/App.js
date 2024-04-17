import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  toMovieDetails,
  toMoviesList,
  toPeopleDetails,
  toPeopleList,
} from "./routes";
import Navigation from "./components/Navigation";
import { Pagination } from "./components/Pagination";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import { PeopleDetails } from "./features/PeopleDetails";
import PeopleList from "./components/PeopleList";
import { ErrorPage } from "./components/ErrorPage";
import { LoadingPage } from "./components/LoadingPage";
import { useShowData } from "./useShowData.js"; // 1. usunąć przed deploymentem 🗑
import {
  selectDisplay,
  selectFetchStatus,
  selectImagesToLoad,
} from "./features/pageState/pageStateSlice";
import { useSelector } from "react-redux";

// przed deploymentem usunąć pozycje, które potrzebujemy tylko do budowania aplikacji oraz ten komentarz🗑:
// 1). import { useShowData } from "./useShowData.js";🗑
// 2). useShowData();🗑
// 3). plik useShowData.js;🗑 z katalogu: src/
// po deploymencie przywrócić usunięte elementy na gałęzi main :)

function App() {
  const display = useSelector(selectDisplay);
  const fetchStatus = useSelector(selectFetchStatus);
  const imagesToLoad = useSelector(selectImagesToLoad);
  useShowData(); // 2. usunąć przed deploymentem 🗑

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
