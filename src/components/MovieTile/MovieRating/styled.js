import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/VectorStar.svg";

export const MovieTileRating = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
  font-size: ${({ big }) => (big ? "22" : "16") + "px"};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ big }) => (big ? "1.3" : "1.5")};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0;
    gap: 8px;
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: ${({ big }) => (big ? "40" : "24") + "px"};
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: ${({ big }) => (big ? "24" : "16") + "px"};
  }
`;

export const MovieTileRatingTen = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: none;
  }
`;

export const MovieTileRatingVotes = styled.span`
  font-size: ${({ big }) => (big ? "14" : "16") + "px"};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.2;
  color: ${({ big, theme }) =>
    big ? theme.color.black : theme.color.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 13px;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;
