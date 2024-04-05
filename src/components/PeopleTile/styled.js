import { styled } from "styled-components";

export const Wrapper = styled.div`
    max-width: 208px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 16px;
`;

export const Image = styled.img`
    margin: 0 0 12px 0;
    border-radius: 5px;
    width: 176px;
`;

export const Name = styled.div`
    margin: 0 0 8px 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 28.6px;
    text-align: center;
`;

export const Character = styled.div`
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: ${({ theme }) => theme.color.waterloo};
`;