import styled from "styled-components";

export const MoviesListSection = styled.section`
  margin-top: 150px;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 16px;
  }
`;

export const MoviesListTitle = styled.h1`
  margin: 0 24px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 8px;
    font-size: 18px;
  }
`;

export const MoviesListWrapper = styled.ul`
  list-style: none;
  margin: 24px 0;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 16px;
  }
`;
