import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import { Slider } from 'components/atoms/Slider/Slider';
import { Description, InfoWrapper, Title, Wrapper } from './ParameterSection.styles'; // Dodaj StyledSelect
import { formatToStorage } from 'utils/inputFormatters';
import RadioButtonGroup from './RadioButtonGroup/RadioButtonGroup';
import { Postfix, Select, SelectWrapper } from 'components/atoms/Select/Select';

const ParameterSection = ({
  title,
  description,
  value,
  onChange,
  onBlur,
  min,
  max,
  postfix,
  disabled,
  percentage,
  radioButtons,
  onRadioChange,
  inputType,
}) => (
  <Wrapper>
    <InfoWrapper>
      <div>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {radioButtons && <RadioButtonGroup radioButtons={radioButtons} onRadioChange={onRadioChange} />}
      </div>

      {inputType === 'select' ? (
        <SelectWrapper>
          <Select value={value} onChange={onChange} onBlur={onBlur}>
            {min &&
              max &&
              Array.from({ length: (max - min) / 12 + 1 }, (_, i) => min + i * 12).map((term) => (
                <option key={term} value={term}>
                  {term}
                </option>
              ))}
          </Select>
          {postfix && <Postfix>{postfix}</Postfix>}
        </SelectWrapper>
      ) : (
        <Input postfix={postfix} disabled={disabled} value={value} onChange={onChange} onBlur={onBlur} />
      )}
    </InfoWrapper>

    {!percentage && <Slider min={min} max={max} value={formatToStorage(value)} onChange={onChange} />}
  </Wrapper>
);

// Prop type definitions
ParameterSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  postfix: PropTypes.string,
  disabled: PropTypes.bool,
  percentage: PropTypes.bool,
  radioButtons: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      checked: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  onRadioChange: PropTypes.func,
  inputType: PropTypes.string, // Dodaj prop type dla inputType
};

// Default prop values
ParameterSection.defaultProps = {
  description: null,
  min: 0,
  max: 100,
  postfix: null,
  disabled: false,
  percentage: false,
  radioButtons: null,
  onRadioChange: () => {},
  inputType: 'text', // Dodaj domyślną wartość dla inputType
};

export default ParameterSection;
