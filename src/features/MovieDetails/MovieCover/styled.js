import styled, { keyframes } from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/VectorStar.svg";

export const MovieCoverBlackBars = styled.img`
  position: absolute;
  top: -3px;
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
  padding: 0 24px;

  @media (max-width: 1416px) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: -36px 0 0;
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
  transition-delay: 0.5s;
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
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    bottom: clamp(8px, 1.6vw, 56px); 
    gap: clamp(4px, 1.6vw, 24px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    bottom: 8px;
    gap: 4px;
  }
`;

export const MovieCoverTitle = styled.h1`
  margin: 0px;
  font-size: 64px; 
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  line-height: 76.8px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(24px, 5vw, 64px);
    line-height: clamp(28.8px, 5vw, 76.8px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const StyledCoverStarIcon = styled(StarIcon)`
  width: 40px;
  height: 38px;
  transition: 0.6s;
  margin-bottom: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: clamp(16px, 3vw, 40px); 
    height: clamp(15px, 3vw, 38px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 16px;
    height: 15px;
  }
`;

export const MovieCoverRating = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 8px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    row-gap: clamp(8px, 1.6vw, 16px); 
    column-gap: clamp(4px, 1.6vw, 8px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    column-gap: 4px;
  }
`;

export const RatingCover = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 30px;
  line-height: 39px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(14px, 3vw, 30px); 
    line-height: clamp(18.2px, 3vw, 39px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: 14px;
    line-height: 18.2px;
  }
`;

export const MovieTileRatingCoverTen = styled.span`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 19.2px;
  text-align: left;
  margin-left: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(10px, 1.7vw, 16px); 
    line-height: clamp(12px, 1.7vw, 19.2px); 
    margin-left: clamp(2px, 1.7vw, 7px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
    line-height: 12px;
    margin-left: 2px;
  }
`;

export const MovieCoverRatingVotes = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 19.2px;
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(10px, 1.7vw, 16px); 
    line-height: clamp(12px, 1.7vw, 19.2px); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
    line-height: 12px;
    width: auto;
    margin-left: 6px;
    margin-bottom: 1px;
  }
`;