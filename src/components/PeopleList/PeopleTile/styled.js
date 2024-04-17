import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.color.white};
  padding: clamp(8px, 0.85vw , 16px);
  transition: 0.6s;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.boxShadow};
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover { 
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 8px;
    gap: 8px;
    min-height: 245px;
  }
`;

export const Image = styled.img`
  margin: 0;
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

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-bottom: clamp(8px, 2.1vw, 12px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 0 0 8px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 0.5vw , 12px);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 4px;
  }
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 22px;
  line-height: clamp(18.2px, 2.5vw , 28.6px);
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(14px, 2.5vw , 22px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: -1px;
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
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;