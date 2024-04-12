import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 56px 24px 0;
  width: 1416px;

  @media (max-width: 1416px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    padding: 36px 16px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 24px 16px 0;
  }
`;

export const SectionHeading = styled.h2`
  margin: 0 0 24px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 16px;
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 12px;
    font-size: 18px;
  }
`;
