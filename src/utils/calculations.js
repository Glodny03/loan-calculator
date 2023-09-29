import { VAT_PERCENTAGE } from './constants';

export const calcMinDownPaymentPercentage = (loanTerm) => {
  switch (loanTerm) {
    case 24:
    case 36:
      return 0;
    case 48:
      return 0.1;
    case 60:
      return 0.2;
    default:
      return 0;
  }
};

export const calculateMonthlyRate = (loanAmount, selfDeposit, loanTerm, interestRate, priceType) => {
  const principalAfterDownPayment = loanAmount - selfDeposit;
  const monthlyInterestRate = interestRate / 12 / 100;

  let result =
    (principalAfterDownPayment * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) /
    (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

  if (priceType === 'brutto') {
    result += result * (VAT_PERCENTAGE / 100); // Applying VAT for 'brutto'
  }

  return result;
};
