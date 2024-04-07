import { getMovieDetails } from "../../api/fetchApi";

export const useMovieTile = (setMovieDetails) => {
  const fetchApiMovieDetails = async (id) => {
    const movieDetails = await getMovieDetails(id);
    setMovieDetails(movieDetails);
  }

  return {
    fetchApiMovieDetails
  }
};