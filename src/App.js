import Navigation from "./components/Navigation";
import { getPopularMovies, getGenre, getCredits } from "./api/fetchApi";
import { Pagination } from "./components/Pagination";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import PeopleList from "./components/PeopleList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFetchStatus } from "./features/MoviesList/moviesSlice";

function App() {
  const [routerStatus, setRouterStatus] = useState("movies");
  const [popularMovies, setPopularMovies] = useState();
  const [genre, setGenre] = useState();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState();
  const [pages, setPages] = useState(
    {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    }
  );
  const status = useSelector(selectFetchStatus)
  console.log("popularMovies: ", popularMovies);
  console.log("genre: ", genre);
  console.log("movieDetails: ", movieDetails);
  console.log("credits: ", credits);
  console.log("pages: ", pages);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     // const popularMovies = await getPopularMovies(pages.currentPage);
  //     // setPopularMovies(popularMovies);
  //     // const genre = await getGenre();
  //     // setGenre(genre);
  //     // const credits = await getCredits();
  //     // setCredits(credits);
  //   };

  //   fetchApi();
  // }, [pages.currentPage]);

  return (
    <>
      <Navigation setMovieDetails={setMovieDetails} setRouterStatus={setRouterStatus} />
      {status === "loading" && <p>ŁADOWANIE</p>}
      {status === "error" && <p>BŁĄD</p>}
      {status === "ready" &&
        <>
          <Container>
            {routerStatus === "movies" &&
              (!movieDetails ?
                <MoviesList popularMovies={popularMovies} genre={genre} setMovieDetails={setMovieDetails} />
                :
                <MovieDetails movieDetails={movieDetails} />)
            }
            {routerStatus === "people" && <PeopleList movieDetails={movieDetails} />}
          </Container>
          {routerStatus === "movies" && movieDetails === null && <Pagination pages={pages} setPages={setPages} />}
        </>
      }
    </>
  );
};

export default App;