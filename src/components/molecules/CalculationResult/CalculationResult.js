import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InfoTitle, LoanInstallment } from './CalculationResult.styles';

// Component to display calculated loan installment amount
const CalculationResult = ({ value }) => (
  <Wrapper>
    <InfoTitle>Twoja rata:</InfoTitle>
    <LoanInstallment>
      {value} <span>PLN/mies.</span>
    </LoanInstallment>
  </Wrapper>
);

// Prop type definitions
CalculationResult.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// Default prop values
CalculationResult.defaultProps = {
  value: '0',
};

export default CalculationResult;
