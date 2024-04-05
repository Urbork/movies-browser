import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";

function App() {
  return (
    <Container>
      <MovieDetails />
      <MoviesList />
    </Container>
  );
}

export default App;
