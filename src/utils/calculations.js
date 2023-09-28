export const calculateMonthlyRate = (loanAmount, selfDeposit, loanTerm, interestRate) => {
  // M = P * (4)
  const P = loanAmount - selfDeposit; // Kwota pozyczki
  const r = interestRate / 12 / 100; // Stopa procentowa
  const n = loanTerm; // okres kredytu w miesiącach

  return (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
};
