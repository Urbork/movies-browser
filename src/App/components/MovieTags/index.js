import { MovieTileTags, MovieTileTag } from "./styled";

export const MovieTags = ({ tags, genres }) =>
  genres && (
    <MovieTileTags>
      {tags.map((tag, index) => (
        <MovieTileTag key={index}>{genres[tag]}</MovieTileTag>
      ))}
    </MovieTileTags>
  );
