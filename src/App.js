import Navigation from "./components/Navigation";
import { getPopularMoviesApi, getGenre, getCredits, getPopularPeopleApi, getPerson, getMovieCredits } from "./api/fetchApi";
import { Pagination } from "./components/Pagination";
import { Container } from "./components/Container";
import { MovieDetails } from "./features/MovieDetails";
import { MoviesList } from "./features/MoviesList";
import { PeopleDetails } from "./features/PeopleDetails";
import PeopleList from "./components/PeopleList";
import { useEffect, useState } from "react";

function App() {
  const [routerStatus, setRouterStatus] = useState("movies");
  const [popularMovies, setPopularMovies] = useState();
  const [genre, setGenre] = useState();
  const [movieDetails, setMovieDetails] = useState(null);
  const [peopleDetails, setPeopleDetails] = useState(null);
  const [credits, setCredits] = useState();
  const [pages, setPages] = useState(
    {
      firstPage: 1,
      currentPage: 1,
      lastPage: 500,
    }
  );
  const [popularPeople, setPopularPeople] = useState();
  const [person, setPerson] = useState();
  const [movieCredits, setMovieCredits] = useState(null);

  console.log("popularMovies: ", popularMovies);
  console.log("genre: ", genre);
  console.log("movieDetails: ", movieDetails);
  console.log("credits: ", credits);
  console.log("pages: ", pages);
  console.log("popularPeople: ", popularPeople);
  console.log("person: ", person);
  console.log("movieCredits: ", movieCredits);

  useEffect(() => {
    const fetchApi = async () => {
      const popularMovies = await getPopularMoviesApi(pages.currentPage);
      setPopularMovies(popularMovies);
      const genre = await getGenre();
      setGenre(genre);
      const credits = await getCredits();
      setCredits(credits);
      const popularPeople = await getPopularPeopleApi();
      setPopularPeople(popularPeople);
      const person = await getPerson();
      setPerson(person);
      const movieCredits = await getMovieCredits();
      setMovieCredits(movieCredits);
    };

    fetchApi();
  }, [pages.currentPage]);

  return (
    <>
      <Navigation setMovieDetails={setMovieDetails} setPeopleDetails={setPeopleDetails} setRouterStatus={setRouterStatus} />
      <Container>
        {routerStatus === "movies" &&
          (!movieDetails ?
            <MoviesList popularMovies={popularMovies} genre={genre} setMovieDetails={setMovieDetails} />
            :
            <MovieDetails movieDetails={movieDetails} />
          )
        }
        {routerStatus === "people" &&
          (!peopleDetails ?
            <PeopleList popularPeople={popularPeople} setPeopleDetails={setPeopleDetails}/>
            :
            <PeopleDetails person={person} />
          )
        }
      </Container>
      {routerStatus === "movies" && movieDetails === null && <Pagination pages={pages} setPages={setPages} />}
      {routerStatus === "people" && peopleDetails === null && <Pagination pages={pages} setPages={setPages} />}
    </>
  );
};

export default App;