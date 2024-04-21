import styled from "styled-components";
import search from "../../images/search.svg";

export const Input = styled.input`
  flex-basis: 100%;
  flex-shrink: 1;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.darkerGrey};
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 33px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 24px 50%;
  text-indent: 40px;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
    background-size: 16px;
    background-position: 16px 50%;
    text-indent: 16px;
  }
`;
