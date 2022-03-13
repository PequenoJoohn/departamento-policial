import styled from 'styled-components';

const Container = styled.section`
  background: #ffffff;
  width: 400px;
  padding: 2rem;
  border-radius: 7px;

  .edit {
    &-icon-voltar {
    background: transparent;
    border: 0;
    display: flex;
    margin-bottom: 0.5rem;

    svg {
      fill: #2A3159;
    }

    p {
      margin-left: 0.5rem;
      color: #2A3159;
      cursor: pointer;
      }
    }

    h1 {
      color: #2A3159;
      font-size: 28px;
      padding-bottom: 1rem;
      position: relative;

      &::after {
        content: '';
        width: 35%;
        height: 1px;
        background: #2A3159;
        position: absolute;
        bottom: 10px;
        left: 0;
      }
    }

    &-dados {
      &-separador {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0;

        &--registro {
          display: flex;
          flex-direction: column;
          width: 100%;
          /* flex: 0 0 100%; */

          label {
            color: #2A3159;
            font-size: 18px;
            font-weight: normal;
          }

          input {
            padding: 0.5rem;
            border-radius: 7px;
            border: 1px solid #2A315960;
          }

          textarea {
            padding: 0.5rem;
            height: 120px;
            resize: none;
            border-radius: 7px;
            border: 1px solid #2A315960;
          }

          h3 {
            color: #2A3159;
            font-size: 18px;
            font-weight: bold;
          }

          p {
            color: #2A3159;
          }
        }
      }
    }
  }

  .view {
    &-icon-voltar {
    background: transparent;
    border: 0;
    display: flex;
    margin-bottom: 0.5rem;

    svg {
      fill: #2A3159;
    }

    p {
      margin-left: 0.5rem;
      color: #2A3159;
      cursor: pointer;
      }
    }

    h1 {
      color: #2A3159;
      font-size: 28px;
      padding-bottom: 1rem;
      position: relative;

      &::after {
        content: '';
        width: 35%;
        height: 1px;
        background: #2A3159;
        position: absolute;
        bottom: 10px;
        left: 0;
      }
    }

    &-dados {
      &-separador {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0;

        &--registro {
          flex: 0 0 50%;

          &:not(.s) {
            flex: 0 0 100%;
            max-height: 120px;
            overflow-x: hidden;
          }

          h3 {
            color: #2A3159;
            font-size: 18px;
            font-weight: bold;
          }

          p {
            color: #2A3159;
          }
        }
      }
    }
  }

  button[type="submit"] {
    background: #2A3159;
    border: 0;
    padding: 0.5rem;
    color: #FFFFFF;
    border-radius: 3px;
    margin-top: 0.5rem;
    width: 100%;
    transition: 0.3s background;

    &:hover {
      background: #4e5ba5;
    }
  }

  `;

export default Container;
