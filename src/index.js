import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./core/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
