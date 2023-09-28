import styled from 'styled-components';

const determineMaxWidth = (postfix) => {
  return postfix === '%' || postfix === 'mies.' ? '97px' : 'auto';
};

export const Wrapper = styled.div`
  position: relative;
  max-width: ${({ postfix }) => determineMaxWidth(postfix)};
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 500;
  max-width: 100%;
  outline: none;
  padding: 9px 55px 9px 0;
  text-align: right;

  @media (max-width: 490px) {
    width: 100%;
    margin-top: 15px;
  }

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
  pointer-events: none;

  @media (max-width: 490px) {
    transform: translateY(0);
  }
`;
