import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import { Slider } from 'components/atoms/Slider/Slider';
import { Description, InfoWrapper, RadioWrapper, Title, Wrapper } from './ParameterSection.styles';

const ParameterSection = ({ title, description, inputType, value, onChange, min, max, percentage, radioButtons, onRadioChange }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <div>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}

          {radioButtons ? (
            <RadioWrapper>
              {radioButtons.map((radio) => (
                <label key={radio.value}>
                  <input type="radio" value={radio.value} checked={radio.checked} onChange={() => onRadioChange(radio.value)} />
                  <span></span> {/* Dodajemy ten element obok każdego inputa */}
                  {radio.label}
                </label>
              ))}
            </RadioWrapper>
          ) : null}
        </div>

        <Input type={inputType} value={value} onChange={onChange} />
      </InfoWrapper>
      {!percentage ? <Slider min={min} max={max} value={value} onChange={onChange} /> : null}
    </Wrapper>
  );
};

ParameterSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  percentage: PropTypes.bool,
  radioButtons: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      checked: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  onRadioChange: PropTypes.func,
};

ParameterSection.defaultProps = {
  description: null,
  min: 0,
  max: 100,
  percentage: false,
  radioButtons: null,
  onRadioChange: () => {},
};

export default ParameterSection;
