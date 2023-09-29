import React, { useEffect, useState } from 'react';
import ParameterSection from 'components/molecules/ParameterSection/ParameterSection';
import CalculationResult from 'components/molecules/CalculationResult/CalculationResult';
import { Wrapper } from './Calculator.styles';
import { formatToDisplay, formatToStorage, formatValue } from 'utils/inputFormatters';
import {
  AVAILABLE_LOAN_TERMS,
  DEFAULT_AMOUNT_TYPE,
  DEFAULT_DOWN_PAYMENT,
  DEFAULT_LOAN_AMOUNT,
  DEFAULT_LOAN_TERM,
  INTEREST_RATE,
  MAX_DOWN_PAYMENT_PERCENTAGE,
  MAX_LOAN_AMOUNT,
  MAX_LOAN_TERM,
  MIN_LOAN_AMOUNT,
  MIN_LOAN_TERM,
} from 'utils/constants';
import Button from 'components/atoms/Button/Button';
import { calcMinDownPaymentPercentage, calculateMonthlyRate } from 'utils/calculations';

const Calculator = () => {
  // State variables for the calculator parameters.
  const [loanAmount, setLoanAmount] = useState(DEFAULT_LOAN_AMOUNT);
  const [selfDeposit, setSelfDeposit] = useState(DEFAULT_DOWN_PAYMENT);
  const [loanTerm, setLoanTerm] = useState(DEFAULT_LOAN_TERM);
  const [priceType, setPriceType] = useState(DEFAULT_AMOUNT_TYPE);
  const [monthlyRate, setMonthlyRate] = useState(0);
  const [minDownPaymentPercentage, setMinDownPaymentPercentage] = useState(0);

  // Event handlers for the input components.
  const handleRadioChange = (type) => setPriceType(type);
  const handleLoanAmountChange = (e) => setLoanAmount(formatToStorage(e.target.value));
  const handleLoanAmountBlur = (e) => setLoanAmount(formatValue(MIN_LOAN_AMOUNT, MAX_LOAN_AMOUNT, formatToStorage(e.target.value)));
  const handleSelfDepositChange = (e) => setSelfDeposit(formatToStorage(e.target.value));
  const handleSelfDepositBlur = (e) => {
    const formattedValue = formatToStorage(e.target.value);
    setSelfDeposit(formatValue(loanAmount * minDownPaymentPercentage, (loanAmount * MAX_DOWN_PAYMENT_PERCENTAGE) / 100, formattedValue));
  };
  const handleLoanTermChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    const roundedValue = AVAILABLE_LOAN_TERMS.reduce((prev, curr) => (Math.abs(curr - inputValue) < Math.abs(prev - inputValue) ? curr : prev));
    setLoanTerm(roundedValue);
    if (selfDeposit < loanAmount * minDownPaymentPercentage) {
      setSelfDeposit(loanAmount * minDownPaymentPercentage);
    }
  };
  const handleLoanTermBlur = (e) => setLoanTerm(formatValue(MIN_LOAN_TERM, MAX_LOAN_TERM, e.target.value));

  // Update calculations whenever relevant state variables change.
  useEffect(() => {
    const calculatedRate = calculateMonthlyRate(loanAmount, selfDeposit, loanTerm, INTEREST_RATE, priceType);
    setMonthlyRate(calculatedRate);
    setMinDownPaymentPercentage(calcMinDownPaymentPercentage(loanTerm));
  }, [loanAmount, selfDeposit, loanTerm, priceType]);

  // Values for the Down Payment Section
  const minSelfDeposit = loanAmount * minDownPaymentPercentage;
  const maxSelfDeposit = (loanAmount * MAX_DOWN_PAYMENT_PERCENTAGE) / 100;
  const downPaymentDescription = `(${minDownPaymentPercentage * 100} - ${MAX_DOWN_PAYMENT_PERCENTAGE}%)`;

  const displayMonthlyRate = monthlyRate < 443206.1 && monthlyRate > 0 ? formatToDisplay(monthlyRate.toFixed(2)) : '443 206.10';

  return (
    <Wrapper>
      {/* Loan Amount Section */}
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

      {/* Down Payment Section */}
      <ParameterSection
        title="Wpłata własna"
        postfix="PLN"
        description={downPaymentDescription}
        value={formatToDisplay(selfDeposit)}
        onChange={handleSelfDepositChange}
        onBlur={handleSelfDepositBlur}
        min={minSelfDeposit}
        max={maxSelfDeposit}
      />

      {/* Loan Term Section */}
      <ParameterSection
        title="Okres kredytu"
        postfix="mies."
        description="(24 - 60 mies.)"
        inputType="select"
        value={loanTerm}
        onChange={handleLoanTermChange}
        onBlur={handleLoanTermBlur}
        min={MIN_LOAN_TERM}
        max={MAX_LOAN_TERM}
      />

      {/* Interest Rate Section */}
      <ParameterSection
        postfix="%"
        disabled
        title="Oprocentowanie"
        description="Roczna stopa procentowa"
        inputType="percentage"
        value={INTEREST_RATE}
        percentage
      />

      {/* Monthly Rate Display */}
      <CalculationResult value={displayMonthlyRate} />

      <Button>Złóż wniosek</Button>
    </Wrapper>
  );
};

export default Calculator;
