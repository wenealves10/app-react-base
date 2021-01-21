import React from 'react';
import { Button, Title } from './Styled';
import { Container } from '../../styles/Global';

const isColor = false;

export default function Login() {
  return (
    <Container>
      <Title>Hello World</Title>
      <Button isColor={!isColor}>Enviar</Button>
    </Container>
  );
}
