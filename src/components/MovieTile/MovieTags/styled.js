import styled from "styled-components";

export const MovieTileTags = styled.ul`
  margin: 0;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const MovieTileTag = styled.li`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;
