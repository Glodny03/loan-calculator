import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import Calculator from 'components/organisms/Calculator/Calculator';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Calculator/>
    </ThemeProvider>
  );
};

export default Root;
