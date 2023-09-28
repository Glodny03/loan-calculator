import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    padding: 20px;
  }

  @media (min-width: 576px) {
    width: 100vw;
    height: 100vh;
  }
`;
