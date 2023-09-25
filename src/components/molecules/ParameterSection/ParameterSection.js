import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Slider } from 'components/atoms/Slider/Slider';
import { Description, InfoWrapper, Title, Wrapper } from './ParameterSection.styles';

const ParameterSection = ({ title, description, inputType, value, onChange, min, max, percentage }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <div>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}
        </div>

        <Input type={inputType} value={value} onChange={onChange} />
      </InfoWrapper>
      {!percentage ? <Slider min={min} max={max} value={value} onChange={onChange} /> : null}
    </Wrapper>
  );
};

export default ParameterSection;
