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
import {
  toMovieDetails,
  toMoviesList,
  toPeopleDetails,
  toPeopleList
} from "./routes";
import { useShowData } from "./useShowData.js";  // 1. usunąć przed deploymentem 🗑
import { selectFetchStatus, selectFirstMoviePage, selectFirstPage, selectImagesToLoad } from "./features/pageState/pageStateSlice";

// przed deploymentem usunąć pozycje, które potrzebujemy tylko do budowania aplikacji oraz ten komentarz🗑:
// 1). import { useShowData } from "./useShowData.js";🗑
// 2). useShowData();🗑
// 3). plik useShowData.js;🗑 z katalogu: src/
// po deploymencie przywrócić usunięte elementy na gałęzi main :)

function App() {
  const fetchStatus = useSelector(selectFetchStatus);
  const imagesToLoad = useSelector(selectImagesToLoad);
  useShowData();  // 2. usunąć przed deploymentem 🗑
  const firstMoviePage = useSelector(selectFirstMoviePage);

  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/movies/:page">
          {console.log("TESTTTTTTTTTTTTTT")}

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
          <Route path="/movies/details/:id">
            {fetchStatus === "loading" && <LoadingPage />}
            {fetchStatus === "error" && <ErrorPage />}
            {fetchStatus === "ready" && <MovieDetails />}
          </Route>
          <Route path="/people/details/:id">
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
