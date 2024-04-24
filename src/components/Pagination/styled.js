import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../images/vectorArrow.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 525px;
  margin: 0 auto 103px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 232px;
    margin: 0 auto 31px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 8px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${({ theme, disabled }) => disabled ? theme.color.grey : theme.color.lightBlue};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  transition: 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 4px;
    padding: 8px 12px;
  }

  &:hover {
    filter: brightness( ${({ disabled }) => disabled ? "100%" : "102%"});
    cursor: ${({ disabled }) => disabled ? "auto" : "pointer"};
  }

  &:active {
    filter: brightness( ${({ disabled }) => disabled ? "100%" : "104%"});
  }
`;

export const Content = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.mineShaft};

  ${({ disabled }) => disabled &&
    css`
      color: ${({ theme }) => theme.color.blackSpecial};
  `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: none;
  }
`;

export const PageNumberInfo = styled.p`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => theme.color.darkerGrey};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  width: 166px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 10px;
    gap: 2px;
    width: 82px;
  }
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const BackwardArrow = styled(Arrow)`
  transform: rotate(180deg);
  fill: ${({ theme }) => theme.color.blue};

  ${({ disabled }) =>
    disabled && css`
      fill: ${({ theme }) => theme.color.darkerGrey};
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 5px;
    height: 8px;
  }
`;

export const AdditionalBackwardArrow = styled(BackwardArrow)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: block;
    width: 5px;
    height: 8px;
  }
`;

export const ForwardArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.color.blue};

  ${({ disabled }) =>
    disabled &&
    css`
      fill: ${({ theme }) => theme.color.darkerGrey};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium} ) {
    width: 5px;
    height: 8px;
  }
`;

export const AdditionalForwardArrow = styled(ForwardArrow)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: block;
    width: 5px;
    height: 8px;
  }
`;
