import styled from 'styled-components';
import backgroundImage from 'assets/images/background.png';

export const Wrapper = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const StyledImage = styled.div`
  background-image: url(${backgroundImage});
  width: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
