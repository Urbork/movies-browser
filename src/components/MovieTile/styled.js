import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../images/VectorStar.svg";

export const MovieTileContent = styled.li`
  padding: 16px;
  width: 324px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
  transition: 0.6s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieTileLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieTileInfo = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 126px;
  }
`;

export const MovieTileTitle = styled.h3`
  margin: 16px 0 0;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0;
    font-size: 16px;
  }
`;

export const MovieTileSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkerGrey};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
  }
`;

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
  background-color: ${({ theme }) => theme.color.tagBG};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const MovieTileRating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0;
    gap: 8px;
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: ${({ big }) => (big ? "40" : "24") + "px"};
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: ${({ big }) => (big ? "24" : "16") + "px"};
  }
`;

export const MovieTileRatingVotes = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.darkerGrey};
`;
