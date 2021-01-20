import React from 'react';
import { Button, Title } from './Styled';

const isColor = false;

const Login = () => (
  <>
    <Title>Hello World</Title>
    <Button isColor={!isColor}>Enviar</Button>
  </>
);

export default Login;
