import React from 'react';
import { Button, Title } from './Styled';
import { Container } from '../../styles/Global';

const isColor = false;

const Login = () => (
  <Container>
    <Title>Hello World</Title>
    <Button isColor={!isColor}>Enviar</Button>
  </Container>
);

export default Login;
