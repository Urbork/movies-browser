import styled from "styled-components";
import search from "./search.svg";

export const Container = styled.nav`
    background-color: #181818;
    color: #FFFFFF;
    position: sticky;
    width: 100%;
    top: 0px;
    margin-bottom: 56px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1368px;
    padding: 23px 16px 23px 17px;
    margin: 0 auto;
    align-items: center;

    @media (max-width: 1023px) {
        padding: 24px 16px 16px 16px;
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px;
    }
`;

export const LogoButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 80px;
    flex-shrink: 1;

    @media (max-width: 590px) {
        gap: 19px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    
    gap: 12px;

    font-weight: 500;
    font-size: 24px;
    line-height: 40px;

    @media (max-width: 590px) {
           font-size: 13px;
           line-height: 16.9px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 590px) {
        gap: 12px;   
    }
`;

export const Button = styled.button`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    background-color: #181818;
    
    border: 1px solid transparent;
    border-radius: 24px;
    padding: 8px 24px;

    cursor: pointer;

    @media (max-width: 590px) {
        padding: 8px 12px;
        font-size: 12px;
        line-height: 18px;
    }

    &:hover {
        border: 1px solid #FFFFFF;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-basis: 432px;
    justify-content: flex-end;

    @media (max-width: 1023px) {
        flex-basis: 535px;
    }

    @media (max-width: 590px) {
        flex-basis: 322px;
    }
`;

export const Input = styled.input`
    flex-basis: 100%;
    flex-shrink: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #7E839A;
    padding: 12px 24px;
    
    border: 1px solid #e4e6f0;
    border-radius: 33px;

    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 24px 50%;
    text-indent: 40px;

    @media (max-width: 590px) {
        font-size: 13px;
        line-height: 16.9px;

        background-size: 16px;
        background-position: 16px 50%;
        text-indent: 16px;
    }
`;