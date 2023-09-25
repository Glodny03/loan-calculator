import styled from 'styled-components';

export const StyledSlider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  appearance: none; 
  height: 7px;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 5px solid ${({ theme }) => theme.colors.darkBrown};
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6.5px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid yellow;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-progress {
    background-color: ${({ theme }) => theme.colors.lightBrown};
  }

  &::-webkit-slider-runnable-track {
    height: 7px;
  }
`;
