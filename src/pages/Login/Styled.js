import styled from 'styled-components';

export const Title = styled.h1`
  color: red;
`;

export const Button = styled.button`
  width: 50px;
  height: 25px;
  background: #fcc;
  margin-top: 18px;
  margin-bottom: 20px;
  color: ${(props) => (props.isColor ? 'red' : 'blue')};
`;
