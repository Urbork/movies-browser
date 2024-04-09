import styled from "styled-components";

export const DetailsWrapper = styled.article`
  margin: 64px 24px;
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 40px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 16px;
    margin: 16px;
    padding: 16px;
  }
`;

export const DetailsImage = styled.img`
  max-width: 312px;
  max-height: 464px;
  grid-row: span 2;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 114px;
    max-height: 169px;
    grid-row: span 1;
  }
`;

export const DetailsTitle = styled.h3`
  margin: 0;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 1.3;
  }
`;

export const DetailsSubtitle = styled.div`
  font-size: 22px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: -4px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.darkerGrey};
    line-height: 1.3;
  }
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 8px;
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const DetailsExtraInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DetailsExtraInfo = styled.p`
  margin: 0;
  display: flex;
  gap: 10px;
`;

export const DetailsExtraInfoLabel = styled.span`
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }
`;

export const DetailsTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

export const DetailsTag = styled.li`
  margin: 0 8px;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  background: ${({ theme }) => theme.color.grey};
`;

export const DetailsDescription = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
  }
`;

export const DetailsSection = styled.section`
  margin: 0 24px 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 16px;
  }
`;

export const DetailsHeading = styled.h1`
  margin: 0 0 24px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 20px;
  }
`;
