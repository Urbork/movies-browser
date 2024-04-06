import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import PeopleList from "./components/PeopleList";
//import { Tile } from "./components/Tile";
import { getPopularMoviesApi, getGenre, getMovieDetails, getCredits } from "./api/fetchApi";
import { profileSmallSizeUrl } from "./api/api";

function App() {
  const [popularMovies, setPopularMovies] = useState();
  const [genre, setGenre] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [credits, setCredits] = useState();
  console.log("popularMovies: ", popularMovies);
  console.log("genre: ", genre);
  console.log("movieDetails: ", movieDetails);
  console.log("credits: ", credits);

  useEffect(() => {
    const fetchApi = async () => {
      const popularMovies = await getPopularMoviesApi();
      setPopularMovies(popularMovies);
      const genre = await getGenre();
      setGenre(genre);
      const movieDetails = await getMovieDetails();
      setMovieDetails(movieDetails);
      const credits = await getCredits();
      setCredits(credits);
    };

    fetchApi();
  }, []);

  return (
    <Container>
      <PeopleList />
    </Container>
  );
}

export default App;

/*
      <Tile
        title={movieDetails?.title}
        subtitle={movieDetails?.release_date.split("-")[0]}
        productionCountry={movieDetails?.production_countries[0].name}
        releaseDate={movieDetails?.release_date}
      />
*/