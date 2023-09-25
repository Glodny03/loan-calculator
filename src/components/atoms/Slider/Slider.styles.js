import styled from 'styled-components';

export const StyledSlider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  appearance: none; /* Usuwa domyślny styl */
  height: 7px;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  border-radius: 4px;
  outline: none; /* Usuwa domyślny kontur wokół elementu przy kliknięciu */
  cursor: pointer;

  /* Dla paska przewijania w Chrome, Safari i nowszych wersjach Edge */
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 5px solid ${({ theme }) => theme.colors.darkBrown};
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6.5px; /* Dopasowanie położenia kółka do środka paska */
  }

  /* Dla paska przewijania w Firefox */
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid yellow;
    border-radius: 50%;
    cursor: pointer;
  }

  /* Dla tła paska przewijania w Firefox */
  &::-moz-range-progress {
    background-color: ${({ theme }) => theme.colors.lightBrown};
  }

  /* Dla tła paska przewijania w Chrome, Safari i nowszych wersjach Edge */
  &::-webkit-slider-runnable-track {
    height: 7px;
  }
`;
