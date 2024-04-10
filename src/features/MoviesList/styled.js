import styled from "styled-components";

export const MoviesListWrapper = styled.ul`
  list-style: none;
  margin: 24px 0;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 16px;
  }
`;
