import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { verificaLogin } from '../../api';
import Glass from '../../components/Glass';
import Container from './styles';
import Store from '../../hooks/Store';

function Login() {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { setUserContext } = Store();

  async function handleSubmit(event) {
    event.preventDefault();

    if (user === '' || password === '') {
      alert('Usuário ou senha não pode estar vazio');
      return;
    }

    setLoading(true);

    const dados = await verificaLogin('/db');

    const filterData = dados.filter((result) => (
      (result.nome === user && result.senha === password)
      && result));

    if (filterData.length === 0) {
      alert('Usuário ou senha invalida');
      setUser('');
      setPassword('');
      setLoading(false);
    } else {
      filterData.slice(0, 1);
      setUserContext(user);
      localStorage.setItem('USER_LOG', user);
      setTimeout(() => {
        setLoading(false);
        history('/processos');
      }, 3000);
    }
  }

  return (
    <>
      <Glass />
      <Container>
        <div className="logo">
          <img src="" alt="" />
          <h1>
            Departamento
            {' '}
            <br />
            de
            Polícia
          </h1>
        </div>

        <form>
          <div>
            <div>
              <label htmlFor="usuario">usuário</label>
              <input type="text" value={user} id="usuario" onChange={(event) => setUser(event.target.value)} placeholder="Digite seu usuário" required disabled={!!loading} />
            </div>
            <div>
              <label htmlFor="senha">senha</label>
              <input type="password" id="senha" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Digite sua senha" disabled={!!loading} />
            </div>

            {loading
              ? (
                <button type="submit">
                  <ClipLoader color="#4d5c93" loading={loading} size={15} />
                </button>
              )
              : <button type="submit" onClick={handleSubmit}>Autenticar</button>}
          </div>
        </form>
      </Container>
    </>
  );
}

export default Login;
