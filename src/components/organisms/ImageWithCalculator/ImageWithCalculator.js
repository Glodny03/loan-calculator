import React from 'react';
import Calculator from '../Calculator/Calculator';
import { StyledImage, Wrapper } from './ImageWithCalculator.styles';

const ImageWithCalculator = () => {
  return (
    <Wrapper>
      <StyledImage />
      <Calculator />
    </Wrapper>
  );
};

export default ImageWithCalculator;
