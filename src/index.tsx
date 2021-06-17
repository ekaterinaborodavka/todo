import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createGlobalStyle } from "styled-components";
import "~src/font-awesome/css/font-awesome.min.css";
import "~src/i18n/index";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    position:relative; 
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  #root{
    height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
