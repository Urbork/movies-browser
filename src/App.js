import Navigation from "./components/Navigation";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import PeopleList from "./components/PeopleList";

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
