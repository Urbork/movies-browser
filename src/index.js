import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./config/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import { GlobalStyle } from "./config/GlobalStyle";
import App from "./app/App";
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
