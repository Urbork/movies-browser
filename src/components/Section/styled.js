import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 56px 0 0;
`;

export const SectionHeading = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
  }
`;
