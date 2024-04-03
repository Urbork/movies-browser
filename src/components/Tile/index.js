import {
  TileWrapper,
  TileImage,
  TileContent,
  TileTitle,
  TileSubtitle,
  TileTags,
  TileTag,
  TileDescription,
  TileInfo,
  TileInfoLabel,
} from "./styled";
import poster from "../../images/poster.png";
import starIcon from "../../images/VectorStar.svg";

export const Tile = ({
  image,
  title,
  subtitle,
  extraInfo,
  tags,
  score,
  description,
}) => (
  <TileWrapper>
    <TileImage src={poster} alt={`${title} movie poster`} />
    <TileContent>
      <TileTitle>{title}</TileTitle>
      <TileSubtitle>{subtitle}</TileSubtitle>
      <TileInfo>
        <TileInfoLabel>Production:</TileInfoLabel> China, United States of
        America
      </TileInfo>
      <TileInfo>
        <TileInfoLabel>Release date:</TileInfoLabel> 24.10.2020
      </TileInfo>
      <TileTags>
        <TileTag>Action</TileTag>
        <TileTag>Adventure</TileTag>
        <TileTag>Drama</TileTag>
      </TileTags>

      {/* Tagi i Ocena w osobnych komponentach?? */}

      <p>
        <img src={starIcon} alt="" /> 7,8/10 <span>335 votes</span>
      </p>
      <TileDescription>
        A young Chinese maiden disguises herself as a male warrior in order to
        save her father. Disguises herself as a male warrior in order to save
        her father. A young Chinese maiden disguises herself as a male warrior
        in order to save her father.
      </TileDescription>
    </TileContent>
  </TileWrapper>
);
