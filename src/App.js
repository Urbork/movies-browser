import Navigation from "./components/Navigation";
import Navigation from "./components/Navigation";
import { Container } from "./components/Container";
import { Tile } from "./components/Tile";
import { getPopularMoviesApi, getGenre, getMovieDetails, getCredits } from "./api/fetchApi";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <MovieDetails />
        <MoviesList />
        <PeopleList />
      </Container>
    </>
  );
}

export default App;
