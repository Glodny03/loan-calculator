import React from 'react';
import PropTypes from 'prop-types';
import { Postfix, StyledInput, Wrapper } from './Input.styles';
import { MAX_LOAN_AMOUNT } from 'utils/constants';

const MAX_INPUT_LENGTH = 15;

const Input = ({ value, postfix, disabled = false, onChange, onBlur }) => {
  // Sanitize input by removing spaces
  const sanitizeInput = (input) => input.replace(/ /g, '');

  // Checks if the given value is numeric
  const isValueNumeric = (val) => !isNaN(val) && isFinite(val);

  const handleInputChange = (e) => {
    const inputValue = sanitizeInput(e.target.value);

    if (!isValueNumeric(inputValue)) {
      return;
    }

    const newValue = inputValue.length > MAX_INPUT_LENGTH ? MAX_LOAN_AMOUNT : e.target.value;

    if (newValue !== value) {
      onChange({ target: { value: newValue } });
    }
  };

  return (
    <Wrapper postfix={postfix}>
      <StyledInput value={value} onChange={handleInputChange} onBlur={onBlur} disabled={disabled} type="text" />
      {postfix && <Postfix>{postfix}</Postfix>}
    </Wrapper>
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  postfix: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  disabled: false,
  postfix: null,
  onBlur: () => {},
};

export default Input;
