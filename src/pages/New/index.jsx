import React, { useState } from 'react';
import {
  useNavigate, useParams,
} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { criarProcesso } from '../../api';
import Container from './styles';
import BlackGlass from '../../components/Glass/styles';

function New() {
  const navigator = useNavigate();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');
  const [tempoPrisao, setTempoPrisao] = useState('');
  const [valorMulta, setValorMulta] = useState('');

  const [codigo, setCodigoPenal] = useState({});

  function handleCreate(event) {
    event.preventDefault();

    const alter = {
      nome,
      descricao,
      multa: valorMulta,
      tempoPrisao,
      status,
    };

    if (alter.nome === ''
      || alter.descricao === ''
      || alter.multa === ''
      || alter.tempoPrisao === ''
      || alter.status === '') {
      alert('Favor preencha os campos', false);
      return;
    }

    criarProcesso('/codigopenal/', alter);

    setTimeout(() => {
      navigator('/processos');
    }, 1000);
  }

  return (
    <Container>
      <BlackGlass />
      <div className="new">
        <button type="button" onClick={() => navigator(-1)} className="new-icon-voltar">
          <FaArrowLeft title="voltar" values="voltar" />
          <p>Voltar</p>
        </button>

        <h1>Criando Novo Relátorio</h1>

        <form className="new-dados">
          <div className="new-dados-separador">
            <div className="new-dados-separador--registro">
              <label>Nome*</label>
              <input
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder="Nome da ocorrência"
              />
            </div>
          </div>
          <div className="new-dados-separador">
            <div className="new-dados-separador--registro">
              <label htmlFor="descricao">Descrição*</label>
              <textarea
                value={codigo.descricao}
                onChange={(event) => setDescricao([event.target.value])}
                placeholder="Descrição da ocorrência"
              />
            </div>
          </div>
          <div className="new-dados-separador">
            <div className="new-dados-separador--registro">
              <label htmlFor="valorMulta">Valor da Multa*</label>
              <input
                type="number"
                value={codigo.multa}
                onChange={(event) => setValorMulta(event.target.value)}
                placeholder="Valor da multa"

              />
            </div>
          </div>
          <div className="new-dados-separador">
            <div className="new-dados-separador--registro">
              <label htmlFor="tempoPrisao">Tempo de prisão*</label>
              <input
                type="number"
                value={codigo.tempoPrisao}
                onChange={(event) => setTempoPrisao(event.target.value)}
                placeholder="Tempo de prisão"
              />
            </div>
          </div>
          <div className="new-dados-separador">
            <div className="new-dados-separador--registro">
              <label htmlFor="status">Status*</label>
              <input
                type="number"
                value={codigo.status}
                onChange={(event) => setStatus(event.target.value)}
                placeholder="Digite 1 ou 2"
              />
              <p>Insira 1 para aberto/2 para resolvido</p>
            </div>
          </div>
        </form>

        <button type="submit" onClick={handleCreate}>Criar</button>

      </div>
    </Container>
  );
}

export default New;
