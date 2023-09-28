import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.l};
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.darkBrown};
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 12px 22px;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBrown};
    color: ${({ theme }) => theme.colors.brown};
  }

  @media (max-width: 576px) {
    padding: 14px 24px;
  }
`;
