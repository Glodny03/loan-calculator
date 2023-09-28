import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 500px;
  padding: 30px;

  @media (max-width: 576px) {
    min-width: auto;
    width: 90vw;
  }
`;
