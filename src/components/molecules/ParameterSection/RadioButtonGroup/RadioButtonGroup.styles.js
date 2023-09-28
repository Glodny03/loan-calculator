import styled from 'styled-components';

export const RadioWrapper = styled.div`
  display: flex;

  & label {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin-top: 4px;
    margin-right: 15px;
  }

  & input[type='radio'] {
    margin-right: 5px;
    appearance: none;
    outline: none;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colors.darkBrown};
    border-radius: 50%;
    background-color: white;
    position: relative;
    transition: background 0.2s ease;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.darkBrown};
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:checked {
      border: 1px solid ${({ theme }) => theme.colors.darkBrown};
    }

    &:checked:before {
      opacity: 1;
    }
  }
`;
