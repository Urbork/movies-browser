import styled from "styled-components";
import {
  MovieTileRating,
  MovieTileRatingVotes,
} from "../../../components/MovieTile/styled";

export const MovieCoverBlackBars = styled.div`
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  width: 100vw;
  max-height: 770px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
`;

export const MovieCoverWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1368px;
`;

export const MovieCoverEffect = styled.img`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
`;

export const MovieCoverImage = styled.img`
  max-width: 100%;
`;

export const MovieCoverInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 10%;
  padding: 0 24px;
`;

export const MovieCoverTitle = styled.h1`
  margin: 0px;
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 24px;
  }
`;

export const MovieCoverRating = styled(MovieTileRating)`
  margin: 24px 0 16px;
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};

  &::after {
    content: "/ 10";
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 4px;
    font-size: 14px;
  }
`;

export const MovieCoverRatingTen = styled.span`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const MovieCoverRatingVotes = styled(MovieTileRatingVotes)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
  }
`;
