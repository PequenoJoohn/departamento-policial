import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  // baseURL: 'https://my-json-server.typicode.com/cidadealta/exercise',

});

export const buscaProcessos = async (url, setData) => {
  const result = await api.get(url);
  setData(result.data);
};

export const verificaLogin = async (url) => {
  const result = await api.get(url);
  return result.data.usuarios;
};

export const buscaProcesso = async (url, setData) => {
  const result = await api.get(url);
  setData(result.data);
};

export const criarProcesso = async (url, params) => {
  const dateParse = new Date();

  const result = await api.post(url, {
    nome: params.nome,
    descricao: params.descricao,
    dataCriacao: dateParse,
    multa: params.multa,
    tempoPrisao: params.tempoPrisao,
    status: params.status,
  });

  return result.data;
};

export const alteraProcesso = async (url, params, reload) => {
  const dateParse = new Date();

  const result = await api.patch(url, {
    nome: params.nome,
    descricao: params.descricao,
    dataCriacao: dateParse,
    multa: params.multa,
    tempoPrisao: params.tempoPrisao,
    status: params.status,
  }).finally(() => reload);
  return result.data;
};

export const deletaProcesso = async (url) => {
  const result = await api.delete(url);
  return result;
};
