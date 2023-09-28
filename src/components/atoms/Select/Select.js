import styled from 'styled-components';

export const Select = styled.select`
  flex: 1;
  width: 90px;
  padding: 9px 50px 9px 0;
  text-align: right;
  border-radius: 8px;
  color: #333;
  appearance: none;
  background-color: #fff;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.l};
  cursor: pointer;

  @media (max-width: 490px) {
    width: 100%;
    margin-top: 15px;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #f3f3f3;
    cursor: not-allowed;
  }
`;

export const Postfix = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  pointer-events: none;

  @media (max-width: 490px) {
    transform: translateY(0);
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 90px;

  @media (max-width: 490px) {
    width: 100%;
  }
`;