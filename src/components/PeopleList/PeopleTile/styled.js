import { styled } from "styled-components";

export const Wrapper = styled.div`
    max-width: 208px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 16px;
    transition: 0.6s;
    box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.boxShadow};
    
    cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        max-width: 136px;
        padding: 8px;
        border-radius: 5px;
    }
`;

export const Image = styled.img`
  border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        width: 120px;
    }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 12px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        margin: 0 0 8px 0;
    }
`;

export const BlankActorContainer = styled(ImageContainer)`
  height: 278px;
  border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        height: 180px;
    }
`;

export const Name = styled.div`
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 22px;
    line-height: 28.6px;
    text-align: center;
    min-height: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        font-size: 14px;
        line-height: 18.2px;
        min-height: 36px;
    }
`;

export const Character = styled.div`
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: ${({ theme }) => theme.color.darkerGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        font-size: 13px;
        line-height: 16.9px;
    }
`;
