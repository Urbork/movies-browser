import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:64px;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: clamp(21px, 6vw, 64px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 21px;
  }
`;
