import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Importing loan-related constants
import {
  DEFAULT_LOAN_AMOUNT,
  DEFAULT_LOAN_TERM,
  INTEREST_RATE,
  MAX_LOAN_AMOUNT,
  MAX_LOAN_TERM,
  MIN_LOAN_AMOUNT,
  MIN_LOAN_TERM,
} from 'utils/constants';
import { Postfix, StyledInput, Wrapper } from './Input.styles';

// Utility function to format a number into a string with commas (e.g., "1,000")
const formatNumber = (number) => {
  if (typeof number !== 'number' || isNaN(number)) return '';
  return new Intl.NumberFormat().format(number);
};

// Return the initial value for the given type (price, months, percentage)
const getInitialValue = (type) => {
  const typeValues = {
    price: formatNumber(DEFAULT_LOAN_AMOUNT || 0),
    months: formatNumber(DEFAULT_LOAN_TERM || 0),
    percentage: `${parseFloat(INTEREST_RATE || 0) * 100}`,
  };
  return typeValues[type] || '';
};

// Return the postfix and the disabled status for a given type
const getPostfixAndDisabledStatus = (type) => {
  const typeData = {
    price: { postfix: ' PLN', disabled: false },
    months: { postfix: ' mies.', disabled: false },
    percentage: { postfix: ' %', disabled: true },
  };
  return typeData[type] || { postfix: '', disabled: false };
};

export const Input = ({ type = 'text', ...props }) => {
  // State for input's value
  const [value, setValue] = useState(() => getInitialValue(type));

  // Handle price change by stripping non-digits and formatting
  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    setValue(formatNumber(parseInt(rawValue, 10)));
  };

  // Handle months change by stripping non-digits
  const handleMonthsChange = (e) => {
    const numericValue = parseInt(e.target.value.replace(/\D/g, ''), 10);
    if (!isNaN(numericValue)) {
      setValue(numericValue.toString());
    }
  };

  // Handle months input blur by clamping value between MIN and MAX
  const handleMonthsBlur = () => {
    const numericValue = parseInt(value, 10);
    const clampedValue = Math.min(MAX_LOAN_TERM || Infinity, Math.max(MIN_LOAN_TERM || -Infinity, numericValue));
    setValue(clampedValue.toString());
  };

  const { postfix, disabled } = getPostfixAndDisabledStatus(type);

  // Define change handlers based on type
  const handleChange = {
    price: handlePriceChange,
    months: handleMonthsChange,
    default: (e) => setValue(e.target.value),
  };

  // Handle price input blur by clamping value between MIN and MAX
  const handlePriceBlur = () => {
    const numericValue = parseInt(value.replace(/[\D,]/g, ''), 10);
    const clampedValue = Math.min(MAX_LOAN_AMOUNT || Infinity, Math.max(MIN_LOAN_AMOUNT || -Infinity, numericValue));
    setValue(formatNumber(clampedValue));
  };

  // Render the styled input with appropriate handlers and postfix
  return (
    <Wrapper>
      <StyledInput
        value={value}
        onChange={handleChange[type] || handleChange.default}
        onBlur={type === 'months' ? handleMonthsBlur : type === 'price' ? handlePriceBlur : undefined}
        disabled={disabled}
        {...props}
        type="text"
        inputType={type}
      />
      <Postfix>{postfix}</Postfix>
    </Wrapper>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'price', 'months', 'percentage']),
};

Input.defaultProps = {
  type: 'text',
};
