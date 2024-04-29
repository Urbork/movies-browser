import styled from "styled-components";
import { ReactComponent as NoResultImage } from "../../images/VectorNoResult.svg";

export const StyledNoResultsImage = styled(NoResultImage)`
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
