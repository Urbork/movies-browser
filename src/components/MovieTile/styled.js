import styled from "styled-components";

export const MovieTileContent = styled.li`
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.boxShadow};
  transition: 0.6s;
  width: 100%;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieTileLink = styled.a`
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const MovieTileImage = styled.img`
  margin: 0;
  width: 100%;
  aspect-ratio:  292 / 434; 
  border-radius: 5px;
  transition: 0.6s;
  background-color: transparent;
  flex-shrink: 0;
  opacity: 0;
  opacity: ${({ loaded }) => (loaded) ? 1 : 0};

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

export const MovieTileInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    justify-content: start;
  }
`;

export const MovieTileTitle = styled.h3`
  margin: 16px 0 0;
  font-size: clamp(20px, 1.6vw, 22px); 
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 0;
    font-size: 16px;
  }
`;

export const MovieTileSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkerGrey};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 12px;
  }
`;