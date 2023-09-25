import React from 'react';
import { Wrapper, InfoTitle, LoanInstallment } from './CalculationResult.styles';

const CalculationResult = ({ value = 0 }) => {
  return (
    <Wrapper>
      <InfoTitle>Twoja rata:</InfoTitle>
      <LoanInstallment>
        {value} <span>PLN/mies.</span>
      </LoanInstallment>
    </Wrapper>
  );
};

export default CalculationResult;
