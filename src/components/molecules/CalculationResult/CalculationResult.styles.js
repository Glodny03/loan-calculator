import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const InfoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
`;

export const LoanInstallment = styled(InfoTitle)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-top: 5px;

  & span {
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 500;
  }
`;
