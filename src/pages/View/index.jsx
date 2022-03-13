import React, { useEffect, useState, createRef } from 'react';
import {
  Link, useLocation, useMatch, useNavigate, useParams, useResolvedPath, useSearchParams,
} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { alteraProcesso, buscaProcesso } from '../../api';
import Formater from '../../utils/format';
import Container from './styles';
import BlackGlass from '../../components/Glass/styles';

function View() {
  const { id } = useParams();

  const navigator = useNavigate();
  const location = useLocation();
  const nomeRef = createRef();
  const descricaoRef = createRef();
  const tempoPrisoRef = createRef();
  const statusRef = createRef();
  const valorMultaRef = createRef();

  const [edit, setEdit] = useState(false);
  const [codigo, setCodigoPenal] = useState({});
  const [skeleton, setSkeleton] = useState(true);

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');
  const [tempoPrisao, setTempoPrisao] = useState('');
  const [valorMulta, setValorMulta] = useState('');

  function handleEdit(event) {
    event.preventDefault();

    const alter = {
      nome: nomeRef.current.value,
      descricao: descricaoRef.current.value,
      multa: valorMultaRef.current.value,
      tempoPrisao: tempoPrisoRef.current.value,
      status: statusRef.current.value,
    };

    if (alter.nome === ''
      || alter.descricao === ''
      || alter.multa === ''
      || alter.tempoPrisao === ''
      || alter.status === '') {
      alert('Favor preencha os campos', false);
      return;
    }

    alteraProcesso(`/codigopenal/${id}`, alter, navigator('/processos'));
  }

  useEffect(() => {
    if (location.search === '?edit') {
      setEdit(true);
    }
  }, [nome, descricao, status, valorMulta, tempoPrisao]);

  useEffect(() => {
    buscaProcesso(`/codigopenal/${id}`, setCodigoPenal);
  }, []);

  return (
    <Container>
      <BlackGlass />
      {edit ? (
        <div className="edit">
          <button type="button" onClick={() => navigator(-1)} className="view-icon-voltar">
            <FaArrowLeft title="voltar" values="voltar" />
            <p>Voltar</p>
          </button>

          <h1>Editando Relátorio</h1>

          <form className="edit-dados">
            <div className="edit-dados-separador">
              <div className="edit-dados-separador--registro">
                <label>Nome</label>
                <input
                  type="text"
                  defaultValue={codigo.nome}
                  onChange={(event) => setNome(event.target.value)}
                  ref={nomeRef}
                  required
                />
              </div>
            </div>

            <div className="edit-dados-separador">
              <div className="edit-dados-separador--registro">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  defaultValue={codigo.descricao}
                  onChange={(event) => setDescricao([event.target.value])}
                  ref={descricaoRef}
                />
              </div>
            </div>

            <div className="edit-dados-separador">
              <div className="edit-dados-separador--registro">
                <label htmlFor="">Valor da Multa</label>
                <input
                  type="number"
                  min="0"
                  defaultValue={codigo.multa}
                  onChange={(event) => setValorMulta(event.target.value)}
                  ref={valorMultaRef}
                />
              </div>
            </div>
            <div className="edit-dados-separador">
              <div className="edit-dados-separador--registro">
                <label htmlFor="">Tempo de prisão</label>
                <input
                  type="number"
                  min="0"
                  defaultValue={codigo.tempoPrisao}
                  onChange={(event) => setTempoPrisao(event.target.value)}
                  ref={tempoPrisoRef}
                />
              </div>
            </div>
            <div className="edit-dados-separador">
              <div className="edit-dados-separador--registro">
                <label htmlFor="">Status</label>
                <input
                  type="number"
                  min="1"
                  max="2"
                  defaultValue={codigo.status}
                  onChange={(event) => setStatus(event.target.value)}
                  ref={statusRef}
                />
              </div>
            </div>
          </form>

          <button type="submit" onClick={handleEdit}>Alterar</button>

        </div>
      ) : (
        <div className="view">
          <button type="button" onClick={() => navigator(-1)} className="view-icon-voltar">
            <FaArrowLeft title="voltar" values="voltar" />
            <p>Voltar</p>
          </button>

          <h1>Resumo do Relátorio</h1>

          <div className="view-dados">
            <div className="view-dados-separador">
              <div className="view-dados-separador--registro.s">
                <h3>Nome</h3>
                <p>{codigo.nome}</p>
              </div>
              <div className="view-dados-separador--registro.s">
                <h3>Data de criação</h3>
                <p>{Formater.dateFormater(codigo.dataCriacao)}</p>
              </div>
            </div>
            <div className="view-dados-separador">
              <div className="view-dados-separador--registro">
                <h3>Descrição</h3>
                <p>{codigo.descricao}</p>
              </div>
            </div>
            <div className="view-dados-separador">
              <div className="view-dados-separador--registro.s">
                <h3>Status</h3>
                <p>{codigo.status}</p>
              </div>
              <div className="view-dados-separador--registro.s">
                <h3>Valor da multa</h3>
                <p>{Formater.moneyFormater(codigo.multa)}</p>
              </div>
            </div>
            <div className="view-dados-separador">
              <div className="view-dados-separador--registro.s">
                <h3>Tempo de prisão</h3>
                <p>
                  {codigo.tempoPrisao}
                  {' '}
                  dias
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default View;
