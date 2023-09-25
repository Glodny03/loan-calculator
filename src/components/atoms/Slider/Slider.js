import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlider } from './Slider.styles';

export const Slider = ({ min, max, value, onChange }) => {
  return (
    <div>
      <StyledSlider type="range" min={min} max={max} value={value} onChange={onChange} />
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};
