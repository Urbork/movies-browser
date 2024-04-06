import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/VectorStar.svg";

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
