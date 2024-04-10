import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../images/VectorLoading.svg";

export const LoadingWrapper = styled.section`
  margin: 56px 0 0;
`;

export const LoadingHeading = styled.h2`
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

export const StyledLoadingIcon = styled(LoadingIcon)`
  margin: 120px auto 0;
  display: block;
  animation: spin infinite linear 1.2s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-top: 80px;
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: 24px;
    width: 35px;
    height: 35px;
  }

  @keyframes spin {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(450deg);
    }
  }
`;
