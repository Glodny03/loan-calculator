import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <h2>Init</h2>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
