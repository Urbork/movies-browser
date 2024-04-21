import styled from "styled-components";

export const MoviesListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0px; 
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 324px));
  gap: 24px;
  margin-bottom: -14px;

  @media (max-width: 1102px) {
    grid-template-columns: repeat(3, minmax(0, 324px)); 
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(2, minmax(0, 324px)); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns:minmax(0, 480px); 
  }
`;