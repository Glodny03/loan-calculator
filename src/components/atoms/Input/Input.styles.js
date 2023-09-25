import styled from 'styled-components';

const determineMaxWidth = (inputType) => {
  return inputType === 'months' || inputType === 'percentage' ? '97px' : 'auto';
};

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 500;
  max-width: ${({ inputType }) => determineMaxWidth(inputType)};
  outline: none;
  padding: 22px 55px 22px 0;
  text-align: right;

  &:disabled {
    border-color: ${({ theme }) => theme.colors.lightPurple};
    color: ${({ theme }) => theme.colors.lightPurple};
  }

  &:disabled + span {
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const Postfix = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;