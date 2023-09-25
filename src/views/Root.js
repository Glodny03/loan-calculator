import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Input type="price" />
        <Input type="months" />
        <Input type="percentage" INTEREST_RATE="0.06" />
        <Button>Złóż wniosek</Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
