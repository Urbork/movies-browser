import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const MovieTileContent = styled.li`
  padding: 16px;
  width: 324px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 12px 0px 4px 12px 0px
    ${({ theme }) => theme.color.boxShadow};
  transition: 0.6s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieTileNavLink = styled(NavLink)`
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const MovieTileImage = styled.img`
  margin: 0;
  width: 292px;
  height: 434px;
  border-radius: 4px;
  transition: 0.6s;
  background-color: ${({ theme }) => theme.color.imageBG};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieTileInfo = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 126px;
  }
`;

export const MovieTileInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    justify-content: start;
  }
`;

export const MovieTileTitle = styled.h3`
  margin: 16px 0 0;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0;
    font-size: 16px;
  }
`;

export const MovieTileSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkerGrey};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 12px;
  }
`;
