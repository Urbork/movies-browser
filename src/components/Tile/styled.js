import styled from "styled-components";

export const TileWrapper = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
`;

export const TileImage = styled.img`
  width: 312px;
  height: 464px;
`;

export const TileContent = styled.div``;

export const TileTitle = styled.header`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const TileSubtitle = styled.div`
  font-size: 22px;
`;

export const TileInfo = styled.p``;

export const TileInfoLabel = styled.span`
  color: ${({ theme }) => theme.color.mystic};
`;

export const TileTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 16px -8px;
  padding-left: 0;
`;

export const TileTag = styled.li`
  margin: 8px;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  background: ${({ theme }) => theme.color.mystic};
`;

export const TileScore = styled.div``;

export const TileDescription = styled.p`
  margin: 24px 0 0 0;
  font-size: 20px;
  line-height: 1.6;
`;
