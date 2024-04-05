import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
	  box-sizing: border-box;
  }

  *, ::after, ::before {
	  box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.whisper};
    font-family: "Poppins", "sans-serif";
    color: ${({ theme }) => theme.color.black};
  }
`;
