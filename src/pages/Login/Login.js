import React from 'react';
import { Button, Title } from './Styled';
import { Container } from '../../styles/Global';
import axios from '../../services/axios';

const isColor = false;

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get();
      const { data } = response;
      // eslint-disable-next-line no-console
      console.log(data);
    }
    getData();
  }, []);
  return (
    <Container>
      <Title>Hello World</Title>
      <Button isColor={!isColor}>Enviar</Button>
    </Container>
  );
}
