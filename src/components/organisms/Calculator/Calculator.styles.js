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

// to remove
export const ValueHelper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 10px;
  border: 1px solid black;
  max-width: 230px;
`;
