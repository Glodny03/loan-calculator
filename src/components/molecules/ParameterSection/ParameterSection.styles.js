import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.brown};

  & input[type='range'] {
    margin-top: 17px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-top: 4px;
`;
