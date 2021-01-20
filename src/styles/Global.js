import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    background: #ccc;
  }

  button{
    border: 0;
    cursor: pointer;
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
  }

`;

export const Container = styled.section`
  max-width: 500px;
  background: #fff;
  margin: 15px auto;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
`;
