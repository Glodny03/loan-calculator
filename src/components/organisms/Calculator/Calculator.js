import React, { useState } from 'react';
import ParameterSection from 'components/molecules/ParameterSection/ParameterSection';
import CalculationResult from 'components/molecules/CalculationResult/CalculationResult';
import { Wrapper } from './Calculator.styles';
import { formatToDisplay, formatToStorage, formatValue } from 'utils/inputFormatters';
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
import Button from 'components/atoms/Button/Button';

// Main calculator component, responsible for calculating and displaying loan-related parameters
const Calculator = () => {
  // State hooks for loan parameters
  const [loanAmount, setLoanAmount] = useState(DEFAULT_LOAN_AMOUNT || 0);
  const [selfDeposit, setSelfDeposit] = useState(DEFAULT_DOWN_PAYMENT);
  const [loanTerm, setLoanTerm] = useState(DEFAULT_LOAN_TERM || 0);
  const [priceType, setPriceType] = useState(DEFAULT_AMOUNT_TYPE);

  // Handlers for input and radio button changes and blurs
  const handleRadioChange = (type) => setPriceType(type);
  const handleLoanAmountChange = (e) => setLoanAmount(formatToStorage(e.target.value));
  const handleLoanAmountBlur = (e) => setLoanAmount(formatValue(MIN_LOAN_AMOUNT, MAX_LOAN_AMOUNT, formatToStorage(e.target.value)));
  const handleSelfDepositChange = (e) => setSelfDeposit(formatToStorage(e.target.value));
  const handleSelfDepositBlur = (e) => setSelfDeposit(formatValue(DEFAULT_DOWN_PAYMENT, 10000, formatToStorage(e.target.value)));
  const handleLoanTermChange = (e) => setLoanTerm(e.target.value);
  const handleLoanTermBlur = (e) => setLoanTerm(formatValue(MIN_LOAN_TERM, MAX_LOAN_TERM, e.target.value));

  return (
    <Wrapper>
      <ParameterSection
        title="Kwota kredytu"
        postfix="PLN"
        onChange={handleLoanAmountChange}
        value={formatToDisplay(loanAmount)}
        onBlur={handleLoanAmountBlur}
        percentage
        radioButtons={[
          { value: 'netto', label: 'Netto', checked: priceType === 'netto' },
          { value: 'brutto', label: 'Brutto', checked: priceType === 'brutto' },
        ]}
        onRadioChange={handleRadioChange}
      />

      <ParameterSection
        title="Wpłata własna"
        postfix="PLN"
        description="(0 - 40%)"
        value={formatToDisplay(selfDeposit)}
        onChange={handleSelfDepositChange}
        onBlur={handleSelfDepositBlur}
        min={DEFAULT_DOWN_PAYMENT}
        max={10000}
      />

      <ParameterSection
        title="Okres kredytu"
        postfix="mies."
        description="(24 - 60 mies.)"
        inputType="months"
        value={loanTerm}
        onChange={handleLoanTermChange}
        onBlur={handleLoanTermBlur}
        min={MIN_LOAN_TERM}
        max={MAX_LOAN_TERM}
      />

      <ParameterSection
        postfix="%"
        disabled
        title="Oprocentowanie"
        description="Roczna stopa procentowa"
        inputType="percentage"
        value={INTEREST_RATE}
        percentage
      />

      <CalculationResult value={'1 452,23'} />
      <Button>Złóż wniosek</Button>
    </Wrapper>
  );
};

export default Calculator;
