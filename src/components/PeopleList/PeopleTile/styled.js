import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  transition: 0.15s;

  // ten efekt powoduje poruszanie się elementów w PeopleTileNavLink
  // trzeba znaleźć rozwiązanie lub zamiennić na inny
  &:hover { 
    transform: scale(1.05);
  }
`;

export const PeopleTileNavLink = styled(NavLink)`
  margin: 0;
  height: 100%;
  border: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.boxShadow};
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: clamp(8px, 2.5vw , 12px);
    padding: clamp(8px, 1vw , 16px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 8px;
    gap: 8px;
    min-height: 245px;
  }
`;

export const Image = styled.img`
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  aspect-ratio:  176 / 231; 
  object-fit: cover;
  border-radius: 5px;
  transition: opacity 1s ease-in-out;
  background-color: transparent;
  flex-shrink: 0;
  opacity: 1;
  opacity: ${({ $loaded }) => ($loaded) ? 1 : 0};
  max-width: 177px;
  max-height: 231px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    aspect-ratio:  120 / 178; 
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: clamp(4px, 2.5vw , 10px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 4px;
  }
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 22px;
  line-height: 28.6px;
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(14px, 2.5vw , 22px);
    line-height: clamp(18.2px, 2.5vw , 28.6px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    line-height: 18.2px;
  }
`;

export const Role = styled.p`
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.color.darkerGrey};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(13px, 2.5vw , 18px);
    line-height: clamp(16.9px, 2.5vw , 27px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;