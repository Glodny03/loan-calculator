import React from 'react';
import PropTypes from 'prop-types';
import { Postfix, StyledInput, Wrapper } from './Input.styles';

// Custom Input component with optional postfix display
const Input = ({ value, postfix, disabled = false, onChange, onBlur }) => (
  <Wrapper postfix={postfix}>
    <StyledInput value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} type="text" />
    {postfix && <Postfix>{postfix}</Postfix>}
  </Wrapper>
);

// Type definitions for props
Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  postfix: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

// Default prop values
Input.defaultProps = {
  disabled: false,
  postfix: null,
  onBlur: () => {},
};

export default Input;
