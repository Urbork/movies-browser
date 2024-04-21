import { styled } from "styled-components";

export const Wrapper = styled.div`
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

export const Header = styled.h1`
  margin: 56px 0 24px 0;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 36px;
  line-height: 43.2px;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 24px 0 12px 0;
    padding: 0 16px;
    font-size: 20px;
    line-height: 24px;
  }
`;
