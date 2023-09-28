import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlider } from './Slider.styles';

// Custom Slider component
export const Slider = ({ min, max, value, onChange }) => (
  <div>
    <StyledSlider type="range" min={min} max={max} value={value} onChange={onChange} />
  </div>
);

// Prop type definitions
Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
