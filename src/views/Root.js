import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import ImageWithCalculator from 'components/organisms/ImageWithCalculator/ImageWithCalculator';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <ImageWithCalculator />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
