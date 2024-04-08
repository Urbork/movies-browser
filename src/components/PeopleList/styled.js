import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;
  transition: 0.6s;
  align-items: center;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    gap: 16px;
  }
`;

export const Header = styled.h1`
  margin: 0 0 24px 0;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 36px;
  line-height: 43.2px;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 20px;
    line-height: 24px;
  }
`;
