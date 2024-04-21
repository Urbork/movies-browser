import styled from "styled-components";
import search from "../../images/search.svg";
import { ReactComponent as VideoSVG } from "../../images/video.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.blackSpecial};
  color: ${({ theme }) => theme.color.white};
  position: sticky;
  width: 100%;
  top: 0px;
  z-index: 2;
  margin-bottom: 56px;
  height: 94px;
  
  @media (max-width: 1080px) {
    height: 142px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    background-color: ${({ theme }) => theme.color.black};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1416px;
  padding-left: 40px ;
  padding-right: 41px;
  margin: 0 auto;
  transition: 0.6s;

  @media (max-width: 1080px) {
    justify-content: center;
    align-items: flex-start;
    height: 142px;
    align-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding-left: clamp(16px, 3vw, 40px);
    padding-right: clamp(17px, 3vw, 41px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding-left: 16px;
    padding-right: 17px;
  }
`;

export const LogoButtonsWrapper = styled.div`
  display: flex;
  height: 34px;
  margin: 23px 0;
  align-items: center;

  @media (max-width: 1080px) {
    justify-content: center;
    margin: 24px 0; 
    width: 100%;
    justify-content: space-between;
  }
`;

export const AppName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-align: left;
  padding-right: 80px ;
  min-width: max-content;
  transition: 0.6s;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding-right: 19px ;
    font-size: clamp(13px, 3vw, 13px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
    gap: 8px;
    letter-spacing: -0.5px;
  }
`;

export const Video = styled(VideoSVG)`
  transition: 0.6s;
  width: 40px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 17px;
    align-self: center;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: clamp(12px, 1.6vw 16px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.blackSpecial};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 14px;
  line-height: 21px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  padding: 8px 24px;
  border: 1px solid transparent;
  border-radius: 24px;
  text-align: left;
  cursor: pointer;

  @media (max-width: 1080px) {
    padding: 8px 12px;
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    background-color: ${({ theme }) => theme.color.black};
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 432px;
  height: 48px;

  @media (max-width: 1080px) {
    width: 100%;
    height: 44px;
  }
`;

export const Input = styled.input`
  width: 100%;
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
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
    background-size: 16px;
    background-position: 16px 50%;
    text-indent: 16px;
  }
`;
