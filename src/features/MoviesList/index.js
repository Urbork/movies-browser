import {
  MoviesListSection,
  MoviesListTitle,
  MoviesListWrapper,
} from "./styled";
import { MovieTile } from "../../components/MovieTile";

export const MoviesList = () => (
  <MoviesListSection>
    <MoviesListTitle>Popular movies</MoviesListTitle>
    <MoviesListWrapper>
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
    </MoviesListWrapper>
  </MoviesListSection>
);
