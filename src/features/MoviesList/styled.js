import styled from "styled-components";

export const MoviesListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0px; 
  display: grid;
  grid-template-columns: repeat(4, minmax(205px, 324px));
  gap: 24px;

  @media (max-width: 1068px) {
    grid-template-columns: repeat(3, minmax(205px, 324px)); 
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(195px, 324px)); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns:minmax(288px, 480px); 
    gap: 16px;
  }
`;