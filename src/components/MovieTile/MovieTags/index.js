import { MovieTileTags, MovieTileTag } from "./styled";

export const MovieTags = ({ tags }) => (
  <MovieTileTags>
    {tags
      ? tags.map((tag) => <MovieTileTag key={tag}>{tag}</MovieTileTag>)
      : ""}
  </MovieTileTags>
);
