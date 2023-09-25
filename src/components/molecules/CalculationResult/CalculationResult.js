import React from 'react';
import PropTypes from 'prop-types';
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

CalculationResult.propTypes = {
  value: PropTypes.number,
};

CalculationResult.defaultProps = {
  value: 0,
};

export default CalculationResult;
