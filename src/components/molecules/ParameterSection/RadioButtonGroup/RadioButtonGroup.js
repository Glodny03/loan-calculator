import React from 'react';
import PropTypes from 'prop-types';
import { RadioWrapper } from './RadioButtonGroup.styles';

// Renders a group of radio buttons based on the provided data
const RadioButtonGroup = ({ radioButtons, onRadioChange }) => (
  <RadioWrapper>
    {radioButtons.map((radio) => (
      <label key={radio.value}>
        <input type="radio" value={radio.value} checked={radio.checked} onChange={() => onRadioChange(radio.value)} />
        <span>
        {radio.label}</span>
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
    }),
  ).isRequired,
  onRadioChange: PropTypes.func.isRequired,
};

export default RadioButtonGroup;
