import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Tile } from "./components/Tile";
import { getPopularMoviesApi, getGenre, getMovieDetails, getCredits } from "./api/fetchApi";
import { Pagination } from "./components/Pagination";

function App() {
  const [popularMovies, setPopularMovies] = useState();
  const [genre, setGenre] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [credits, setCredits] = useState();
  const [pages, setPages] = useState(
    {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    }
  );
  console.log("popularMovies: ", popularMovies);
  console.log("genre: ", genre);
  console.log("movieDetails: ", movieDetails);
  console.log("credits: ", credits);

  useEffect(() => {
    const fetchApi = async () => {
      const popularMovies = await getPopularMoviesApi(pages.currentPage);
      setPopularMovies(popularMovies);
      const genre = await getGenre();
      setGenre(genre);
      const movieDetails = await getMovieDetails();
      setMovieDetails(movieDetails);
      const credits = await getCredits();
      setCredits(credits);
    };

    fetchApi();
  }, [pages.currentPage]);

  return (
    <>
      <Container>
        <Tile title={movieDetails?.title} subtitle={movieDetails?.release_date.split("-")[0]
        } />
      </Container>
      <Pagination pages={pages} />
    </>
  );
}

export default App;
