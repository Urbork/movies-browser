import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from '../../images/vectorArrow.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 525px;
  margin: 40px auto 103px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    width: 232px;
    margin: 32px auto 31px;
  };
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    gap: 8px;
  };
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.lightBlue};
  font-weight: 400;
  transition: 0.2s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    gap: 4px;
    padding: 8px 12px;
  };

  &:hover {
    cursor: pointer;
    filter: brightness(102%);
  };

  &:active {
    filter: brightness(104%);
  };

  &:disabled{
    background-color: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.black};
    filter: brightness(100%);
  };
`;

export const Content = styled.span`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    display: none;
  };
`;

export const PageNumberInfo = styled.p`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 16px;  
  margin: 0;
  color: ${({ theme }) => theme.color.darkerGrey};
  font-weight: 400;
  width: 166px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    font-size: 10px; 
    gap: 2px;
    width: 82px;
  };
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
`;

export const BackwardArrow = styled(Arrow)`
  transform: rotate(180deg);
  fill: ${({ theme }) => theme.color.blue};

  ${({ disabled }) => disabled && css`
    fill: ${({ theme }) => theme.color.darkerGrey};
  `};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    width: 5px;
    height: 8px;
  };
`;

export const AdditionalBackwardArrow = styled(BackwardArrow)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    display: block;
    width: 5px;
    height: 8px;
  };
`;

export const ForwardArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.color.blue};

  ${({ disabled }) => disabled && css`
    fill: ${({ theme }) => theme.color.darkerGrey};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    width: 5px;
    height: 8px;
  };
`;

export const AdditionalForwardArrow = styled(ForwardArrow)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax} ) {
    display: block;
    width: 5px;
    height: 8px;
  };
`;