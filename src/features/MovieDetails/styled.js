import styled from "styled-components";

export const MovieDetailsWrapper = styled.article`
  margin: 64px 24px;
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 16px;
    padding: 16px;
  }
`;

export const MovieDetailsImage = styled.img`
  margin-right: 40px;
  max-width: 312px;
  max-height: 464px;
  grid-row: span 2;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-right: 16px;
    max-width: 114px;
    max-height: 169px;
    grid-row: span 1;
  }
`;

export const MovieDetailsContent = styled.div``;

export const MovieDetailsTitle = styled.h3`
  margin: 0;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 1.3;
  }
`;

export const MovieDetailsSubtitle = styled.div`
  font-size: 22px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: -4px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.darkerGrey};
    line-height: 1.3;
  }
`;

export const MovieDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 8px;
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const MovieDetailsExtraInfo = styled.p`
  margin: 0;
`;

export const MovieDetailsExtraInfoLabel = styled.span`
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const MovieDetailsTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

export const MovieDetailsTag = styled.li`
  margin: 0 8px;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  background: ${({ theme }) => theme.color.mystic};
`;

export const MovieDetailsRating = styled.div``;

export const MovieDetailsDescription = styled.p`
  margin: 16px 0 0;
  font-size: 20px;
  line-height: 1.6;
  transition: 0.6s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: 40px;
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const MovieDetailsSection = styled.section`
  margin: 0 24px 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-bottom: 16px;
  }
`;

export const MovieDetailsHeading = styled.h3`
  margin: 0 0 24px;
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 20px;
  }
`;
