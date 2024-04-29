import styled, { css } from "styled-components";

export const DetailsWrapper = styled.article`
  margin: 0;
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 40px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 16px;
    margin: -8px 0 21px;
    padding: 16px;
  }
`;

export const DetailsImage = styled.img`
  width: 312px;
  height: 464px;
  grid-row: span 2;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 114px;
    max-height: 169px;
    grid-row: span 1;
  }
`;

export const DetailsTitle = styled.h3`
  margin: 0; 
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 43.2px;
  text-align: left;
  padding: 80px, 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(14px, 3vw, 36px);
    line-height: clamp(18.2px, 3vw, 43.2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 18.2px;
  }
`;

export const DetailsSubtitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 22px;
  line-height: 26.4px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(13px, 1.6vw, 22px);
    line-height: clamp(16.9px, 1,6vw, 26.4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: -4px;
    font-size: 13px;
    color: ${({ theme }) => theme.color.darkerGrey};
    line-height: 16.9px;
  }
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: clamp(8px, 1.6vw, 24px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 8px;
  }
`;

export const DetailsExtraInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DetailsExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: clamp(12px, 1.6vw, 18px);
    line-height: clamp(15.6px, 1,6vw, 21.6px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 12px;
    line-height: 15.6px;
  }
`;

export const DetailsExtraInfoLabel = styled.span`
  flex-shrink: 0;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.stormGray};

  ${({ $hidden }) => $hidden &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        display: none;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-right: clamp(4px, 1.6vw, 10px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-right: 4px;
  }
`;

export const DetailsDescription = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
  }
`;
