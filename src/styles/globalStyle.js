import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  body, input, button, textarea {
    font: 14px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`;
