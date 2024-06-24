import styled from "styled-components";

export const MovieTileTags = styled.ul`
  margin: 4px 0 0;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: ${({ theme }) => theme.color.blackSpecial};
`;

export const MovieTileTag = styled.li`
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 19.6px;
  background-color: ${({ theme }) => theme.color.grey};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(10px, 1.6vw, 14px);
    line-height: clamp(11px, 1.6vw, 19.6px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 11px;
  }
`;
