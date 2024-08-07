import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const MovieTileContent = styled.li`
  transition: 0.15s;

  &:hover {
    transform: scale(1.04);
  }
`;

export const MovieTileNavLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.boxShadow};
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex-direction: row;
  }
`;

export const MovieTileImage = styled.img`
  margin: 0;
  width: 100%;
  aspect-ratio: 292 / 434;
  border-radius: 5px;
  transition: opacity 1s ease-in-out;
  background-color: transparent;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieTileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 4px;
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MovieTileInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    justify-content: flex-start;
    gap: 8px;
  }
`;

export const MovieTileTitle = styled.h3`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 22px;
  line-height: 28.6px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(16px, 1.6vw, 22px);
    line-height: clamp(20.8px, 1.6vw, 28.6px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
    line-height: 20.8px;
  }
`;

export const MovieTileSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkerGrey};
  line-height: 24px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(13px, 1.6vw, 16px);
    line-height: clamp(16.9px, 1.6vw, 24px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;
