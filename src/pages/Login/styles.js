import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(0, 0, 0, 1);
    filter: blur(2px);
    margin: -20px;
  }

  .logo {
    background: #FFFFFF;
    padding: 2rem 0;
  }

  h1 {
    color: #4D5C93;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    background: #2A3159;
    align-items: center;
    padding: 2rem 0;

    > div {
      width: 60%;

      div {
        margin-bottom: 2rem;

    label {
      color: #afc2fd;
      text-transform: uppercase;
      display: block;
    }

    input {
      border: 0;
      border-bottom: 1px solid #4d5c93;
      background: transparent;
      width: 100%;
      color: #B9C3D2;
      transition: 0.3s all;

      &:disabled {
        cursor: not-allowed;
      }

      &::placeholder {
        color: #4d5c93;
      }

      &:focus {
        color: #B9C3D2;
        outline: none;
        border-bottom: 1px solid #fff;
      }
    }
  }


      button {
        margin: 2rem 0 ;
        display: block;
        width: 100%;
        padding: 0.5rem 0;
        text-transform: uppercase;
        background: #a1abf9;
        color: #FFFFFF;
        border: transparent;
        transition: 0.3s all;
        border-radius: 3px;

        &:hover {
          background: #AFC2FD;
        }
      }
    }
  }

`;

export default Container;
