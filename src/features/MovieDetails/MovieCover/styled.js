import styled, { keyframes } from "styled-components";
import {
  MovieTileRating,
  MovieTileRatingVotes,
} from "../../../components/MovieTile/MovieRating/styled";

export const MovieCoverBlackBars = styled.img`
  position: absolute;
  top: -4px;
  width: 101vw;
  height: 101%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
  z-index: -999;
`;

export const MovieCoverWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1368px;
  background-color: black;
  opacity: 0;
  opacity: ${({ $show }) => $show ? '1' : '0'};
  transition: opacity 1s ease;
  margin: -56px 0 0;

  @media (max-width: 1516px) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: -24px 0 0;
  }
`;

export const MovieCoverEffect = styled.img`
  position: absolute;
  height: 100%;
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1); 
  }
`;

export const MovieCoverImage = styled.img`
  opacity: 0;
  width: 100%;
  opacity: ${({ $show }) => $show ? '1' : '0'};
  transition: opacity 5s ease;
  animation: ${zoomIn} 10s ease; 
  transition-delay: 0.5s
`;

export const MovieCoverInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 56px;
  padding: 0 24px;
  opacity: ${({ $show }) => $show ? '1' : '0'};
  transition: opacity 3s ease;
  transition-delay: 1.8s ;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 24px;
    flex-direction: row;
    align-items: center;
    padding: 0 12px;
    bottom: 8px;
  }
`;

export const MovieCoverTitle = styled.h1`
  margin: 0px;
  font-size: clamp(24px, 3.5vw, 64px); 
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 24px;
    padding: 0 4px;
  }
`;

export const MovieCoverRating = styled(MovieTileRating)`
  margin: 24px 0 16px;
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};
  margin-top: clamp(4px, 1.5vw, 24px);

  &::after {
    content: "/ 10";
    font-size: 16px;
    margin: 2px 4px 0 -5px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      font-size: 10px;
    }
  };

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 4px;
    font-size: 14px;
  }
`;

export const MovieCoverRatingVotes = styled(MovieTileRatingVotes)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 10px;
    margin-top: 2px;
  }
`;