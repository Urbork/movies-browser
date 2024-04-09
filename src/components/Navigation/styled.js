import styled from "styled-components";
import search from "../../images/search.svg";
import { ReactComponent as VideoSVG } from "../../images/video.svg";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.navBar};
  color: ${({ theme }) => theme.color.white};
  position: sticky;
  width: 100%;
  top: 0px;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  max-width: 1368px;
  padding: 23px 16px 23px 17px;
  margin: 0 auto;
  align-items: center;
  
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding: 24px 16px 16px 16px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 19px;
  }
`;

export const LogoButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  flex-shrink: 1;

  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 19px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  gap: 12px;

  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex-shrink: 1;
    font-size: 13px;
    line-height: 16.9px;
    gap: 8px;
  }
`;

export const Video = styled(VideoSVG)`
  transition: 0.6s;
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 17px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 12px;
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.navBar};

  border: 1px solid transparent;
  border-radius: 24px;
  padding: 8px 24px;

  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 8px 12px;
    font-size: 12px;
    line-height: 18px;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.white};
  } // hover do zmiany na active po dodaniu HashRoutera
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-basis: 432px;
  justify-content: flex-end;
  
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    flex-basis: 535px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex-basis: 322px;
  }
`;

export const Input = styled.input`
  flex-basis: 100%;
  flex-shrink: 1;
  font-weight: 400;
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
