import styled from "styled-components";
import { ReactComponent as NoResultImage } from "../../images/VectorNoResult.svg";

export const NoResultWrapper = styled.section`
  margin: 56px 0 0;
`;

export const NoResultHeading = styled.h2`
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

export const StyledNoResultImage = styled(NoResultImage)`
  margin: 0 auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 75%;
    height: 75%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 50%;
    height: 50%;
  }
`;
