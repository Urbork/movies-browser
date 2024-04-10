import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../images/VectorLoading.svg";

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
