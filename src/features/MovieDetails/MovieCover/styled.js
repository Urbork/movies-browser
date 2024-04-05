import styled from "styled-components";
import {
  MovieTileRating,
  MovieTileRatingVotes,
} from "../../../components/MovieTile/styled";

export const MovieCoverWrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieCoverBlackBars = styled.div`
  width: 100vw;
  max-height: 770px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
`;

export const MovieCoverImage = styled.img`
  max-width: 100%;
`;

export const MovieCoverInfo = styled.div`
  /* position: absolute; */
  padding: 0 24px;
  /* bottom: 400px; */
  background-color: #000;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 4px;
    font-size: 14px;
  }
`;

export const MovieCoverRatingVotes = styled(MovieTileRatingVotes)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
  }
`;
