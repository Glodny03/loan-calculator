import React from 'react';
import PropTypes from 'prop-types';
import { RadioWrapper } from './RadioButtonGroup.styles';

const RadioButtonGroup = ({ radioButtons, onRadioChange }) => (
  <RadioWrapper>
    {radioButtons.map(({ value, checked, label }) => (
      <label key={value}>
        <input 
          type="radio" 
          value={value} 
          checked={checked} 
          onChange={() => onRadioChange(value)} 
        />
        <span>{label}</span>
      </label>
    ))}
  </RadioWrapper>
);

// Prop type definitions
RadioButtonGroup.propTypes = {
  radioButtons: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      checked: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRadioChange: PropTypes.func.isRequired,
};

export default RadioButtonGroup;
