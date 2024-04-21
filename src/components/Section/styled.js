import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 0 24px 0;
  width: 1416px;
  opacity: 0;
  opacity: ${({ $show }) => $show ? '1' : '0'};
  transition: opacity .9s ease-in-out;
  display: ${({ $mobile }) => $mobile ? "none" : "auto"};
  transition-delay: ${({ $delay }) => $delay ? "2.5s" : "0"};

  @media (max-width: 1416px) {
    width: 100%; 
  }
 
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 16px 0;
  }
`;

export const SectionHeading = styled.h2`
  margin: 0 0 24px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 43.2px;
  text-align: left;
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
