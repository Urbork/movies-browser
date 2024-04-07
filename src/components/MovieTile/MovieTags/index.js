import { MovieTileTags, MovieTileTag } from "./styled";

export const MovieTags = ({ tags }) => (
  <MovieTileTags>
    {tags
      ? tags.map((tag, index) => <MovieTileTag key={index}>{tag}</MovieTileTag>)
      : ""}
  </MovieTileTags>
);
