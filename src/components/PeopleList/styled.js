import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 208px);
  gap: 24px;
  transition: 0.6s;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(auto-fill, 136px);
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
