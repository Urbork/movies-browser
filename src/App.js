import Navigation from "./components/Navigation";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <MovieDetails />
        <MoviesList />
      </Container>
    </>
  );
}

export default App;
