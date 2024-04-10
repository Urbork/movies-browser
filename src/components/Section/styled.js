import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 56px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 36px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 24px 0 0;
  }
`;

export const SectionHeading = styled.h2`
  margin: 0 0 24px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 16px;
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 12px;
    font-size: 20px;
  }
`;
