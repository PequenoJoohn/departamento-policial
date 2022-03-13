import styled from 'styled-components';

export const Container = styled.div`
  background: #F7F7F7;
  border-radius: 7px;
  overflow: hidden;
  padding: 1rem 1.5rem;

  .title {
    padding-bottom: 20px;
  }

  .options {
    padding-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #100e15;
    }

    a {
      color: #100e15;

      &:hover {
        text-decoration: underline;
      }

      p {
        display: flex;
        align-items: center;

        svg {
          margin-left: 0.3rem;
        }
      }
    }
  }
  .button-paginate {
    button {
        background: transparent;
        border: 0;
        margin: 0.2rem 0.5rem 0 0.5rem;
        svg {
          fill: #8878ff;
          font-size: 18px;
        }

        &:disabled {
          cursor: not-allowed;
          svg {
            filter: brightness(0.6);
          }
        }
      }
  }
`;

export const Table = styled.table`
  background: #ffffff;
  padding: 0.5rem;
  background: #373049;
  border-radius: 3px;

  color: #ffffff;

  tr {
    border: 1px solid #373049;
    width: 200px;

    th {
      color: #fff;
      width: 150px;
      font-weight: bold;
    }

    .nome {
      width: 180px;
    }

    .data {
      text-align: center;
    }

    .multa {
      width: 150px;
      padding-left: 2.5rem;
    }

    .status {
      text-align: center;
    }

    .options {
      text-align: center;

      a {
        margin: 0 0.5rem;
        svg {
          fill: #8878ff;
          &:hover {
            fill: #7285f1;
          }
        }
      }

      button {
        background: transparent;
        border: 0;
        margin: 0.2rem 0.5rem 0 0.5rem;
        svg {
          fill: #8878ff;
        }
      }
    }
  }
`;
