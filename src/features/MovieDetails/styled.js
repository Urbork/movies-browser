import styled from "styled-components";

export const MovieDetailsSection = styled.section`
  margin: 0 24px 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 16px;
  }
`;

export const MovieDetailsHeading = styled.h3`
  margin: 0 0 24px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 20px;
  }
`;
