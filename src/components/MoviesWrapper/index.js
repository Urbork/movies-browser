import styled from "styled-components";

export const MoviesWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0px;
  display: grid;
  grid-template-columns: repeat(4, minmax(205px, 324px));
  gap: 24px;
  margin-bottom: -14px;
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  transition: opacity 0.6s ease-in;

  @media (max-width: 1068px) {
    grid-template-columns: repeat(3, minmax(205px, 324px));
  }

  @media (max-width: 704px) {
    grid-template-columns: repeat(2, minmax(195px, 324px));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: minmax(288px, 480px);
    gap: 16px;
  }
`;
