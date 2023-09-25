import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.l};
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.darkBrown};
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 22px 32px;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBrown};
    color: ${({ theme }) => theme.colors.brown};
  }
`;
