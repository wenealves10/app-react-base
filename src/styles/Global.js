import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, secondaryColor } from '../config/colors';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    background: ${secondaryColor};
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    font-family: sans-serif;
    color: ${primaryColor}
  }

  button{
    border: 0;
    cursor: pointer;
    background-color: ${primaryColor};
    color: #fff;
    font-size: 0.8em;
    font-weight: 700;
    border-radius: 4px;
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: ${primaryColor}
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
