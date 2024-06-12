import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../images/VectorError.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const ErrorWrapper = styled.section`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-top: 64px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: 16px;
    gap: 12px;
  }
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 60px;
    height: 60px;
  }
`;

export const ErrorHeading = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 18px;
  }
`;

export const ErrorSubheading = styled.h3`
  margin: 0;
  max-width: max-content;
  text-align: center;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.3;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 325px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 275px;
    font-size: 14px;
  }
`;

export const ErrorNavLink = styled(NavLink)`
  padding: 16px 24px;
  border: 2px solid;
  border-radius: 5px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  transition: 0.6s;
  cursor: pointer;
  line-height: 19px;
  text-align: left;
  font-family: "Open Sans", "sans-serif";
  text-decoration: none;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.blue};
    background-color: ${({ theme }) => theme.color.white};
  }

  &:active {
    text-decoration: underline;
    background-color: ${({ theme }) => theme.color.lightBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 12px 16px;
    font-size: 12px;
  }
`;
