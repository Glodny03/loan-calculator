import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './Calculator.styles';
import {
  DEFAULT_AMOUNT_TYPE,
  DEFAULT_DOWN_PAYMENT,
  DEFAULT_LOAN_AMOUNT,
  DEFAULT_LOAN_TERM,
  INTEREST_RATE,
  MAX_LOAN_AMOUNT,
  MAX_LOAN_TERM,
  MIN_LOAN_AMOUNT,
  MIN_LOAN_TERM,
} from 'utils/constants';
import ParameterSection from 'components/molecules/ParameterSection/ParameterSection';
import CalculationResult from 'components/molecules/CalculationResult/CalculationResult';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULT_LOAN_AMOUNT || 0);
  const [selfDeposit, setSelfDeposit] = useState(DEFAULT_DOWN_PAYMENT);
  const [loanTerm, setLoanTerm] = useState(DEFAULT_LOAN_TERM || 0);

  const [priceType, setPriceType] = useState(DEFAULT_AMOUNT_TYPE);

  return (
    <Wrapper>
      <ParameterSection
        title="Kwota kredytu"
        inputType="price"
        value={loanAmount}
        onChange={(e) => setLoanAmount(parseInt(e.target.value, 10))}
        min={MIN_LOAN_AMOUNT}
        max={MAX_LOAN_AMOUNT}
        percentage
        radioButtons={[
          { value: 'netto', label: 'Netto', checked: priceType === 'netto' },
          { value: 'brutto', label: 'Brutto', checked: priceType === 'brutto' },
        ]}
        onRadioChange={(type) => setPriceType(type)}
      />

      <ParameterSection
        title="Wpłata własna"
        description="(0 - 40%)"
        inputType="price"
        value={selfDeposit}
        onChange={(e) => setSelfDeposit(parseInt(e.target.value, 10))}
        min={DEFAULT_DOWN_PAYMENT}
        max={10000}
      />

      <ParameterSection
        title="Okres kredytu"
        description="(24 - 60 mies.)"
        inputType="months"
        value={loanTerm}
        onChange={(e) => setLoanTerm(parseInt(e.target.value, 10))}
        min={MIN_LOAN_TERM}
        max={MAX_LOAN_TERM}
      />
      <ParameterSection title="Oprocentowanie" description="Roczna stopa procentowa" inputType="percentage" value={INTEREST_RATE * 100} percentage />

      <CalculationResult value={'1 452,23'} />
      <Button>Złóż wniosek</Button>
    </Wrapper>
  );
};

export default Calculator;
