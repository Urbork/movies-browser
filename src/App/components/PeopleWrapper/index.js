import { styled } from "styled-components";

export const PeopleWrapper = styled.div`
  display: grid;  
  align-items: stretch;
  grid-template-columns: repeat(6, minmax(0, 208px));
  gap: 24px;
  margin-bottom: ${({ $addSpace }) => $addSpace ? "272px" : "-8px"};
  @media (max-width: 1184px) {
    grid-template-columns: repeat(5, minmax(0, 208px)); 
  }

  @media (max-width: 952px) {
    grid-template-columns: repeat(4, minmax(0, 208px)); 
  }

  @media (max-width: 687px) {
    grid-template-columns: repeat(3, minmax(0, 208px)); 
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(2, minmax(0, 208px)); 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 50px;
    gap: 16px;
  }
`;
