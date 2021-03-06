import React, {
  useCallback, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  FaTrash, FaPen, FaEye, FaPlus, FaArrowLeft, FaArrowRight,
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { buscaProcessos, deletaProcesso } from '../../api';

import { Container, Table } from './styles';
import Formater from '../../utils/format';
import BlackGlass from '../../components/Glass/styles';
import Store from '../../hooks/Store';

function Processos() {
  const {
    userContext, processosContext, setProcessosContext,
  } = Store();

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [previousPagination, setPreviousPagination] = useState(false);
  const [nextPagination, setNextPagination] = useState(false);

  function pagination(params) {
    const count = (page * params) - params;

    if (count >= 10) {
      setPreviousPagination(false);
      setNextPagination(true);
    }

    if (count < total.length) {
      setPreviousPagination(true);
      setNextPagination(false);
    }

    console.log((page * 10) + params);
  }

  const recarregaProcessos = useCallback((params) => {
    buscaProcessos(params, setProcessosContext);
    pagination(total.length);
  }, [processosContext, total]);

  function handleDelete(id) {
    const mensagem = 'Deseja realmente excluir esse processo?';

    const resultado = window.confirm(mensagem);

    if (resultado) {
      deletaProcesso(`/codigopenal/${id}`)
        .finally(() => {
          recarregaProcessos('/codigopenal');
        });
    }
  }

  function handleNextPage() {
    setPage(page + 1);
    buscaProcessos(`/codigopenal?_page=${page}&_limit=10)}`, setProcessosContext);
    pagination(total.length);
  }

  function handlePreviousPage() {
    setPage(page - 1);
    buscaProcessos(`/codigopenal?_page=${page}&_limit=10)}`, setProcessosContext);
    pagination(total.length);
  }

  useEffect(() => {
    recarregaProcessos(`/codigopenal?_page=${page}_limit=10`);
    pagination(total.length);
  }, [page, previousPagination, nextPagination, total]);

  useEffect(() => {
    buscaProcessos(`/codigopenal?_page=${page}_limit=10`, setProcessosContext);
    buscaProcessos('/codigopenal', setTotal);
  }, []);

  return (
    <>
      <BlackGlass />
      <Container>
        <div className="title">
          <h1>Central de Processos</h1>
          <p>
            Bem vindo
            {' '}
            {userContext}
          </p>
        </div>
        <div className="options">
          <Link to="/processos/new">
            <p>
              Novo Registro
              <FaPlus />
            </p>
          </Link>

          <Link to="/">
            <p>
              Sair
              <FiLogOut />
            </p>
          </Link>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de Cria????o</th>
              <th>Multa</th>
              <th>Status</th>
              <th>Op????es</th>
            </tr>
          </thead>
          <tbody>
            {processosContext.map((processo) => (
              <tr key={processo.id}>
                <td className="nome">{processo.nome}</td>
                <td className="data">{Formater.dateFormater(processo.dataCriacao)}</td>
                <td className="multa">{Formater.moneyFormater(processo.multa)}</td>
                <td className="status">{processo.status}</td>
                <td className="options">
                  <Link to={`/processos/${processo.id} `}>
                    <FaEye />
                  </Link>
                  <Link to={`/processos/${processo.id}?edit`}>
                    <FaPen />
                  </Link>
                  <button type="button" onClick={() => handleDelete(processo.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div>
          <div>
            <p>
              Total de Registros
              {' '}
              {total.length}
            </p>
          </div>

          <div className="button-paginate">
            <button type="button" onClick={() => handlePreviousPage()} disabled={previousPagination}>
              <FaArrowLeft />
            </button>
            <button type="button" onClick={() => handleNextPage()} disabled={nextPagination}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </>

  );
}

export default Processos;
