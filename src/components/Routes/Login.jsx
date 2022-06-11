import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import persistUser from '../../utils/persistUser';
import { getContext } from '../../hooks/UserContext';

import Input from '../Layout/inputs-buttons/Input';
import Container from '../Layout/Container';
import RetangularButton from '../Layout/inputs-buttons/RetangularButton';
import FeedbackLabel from '../Layout/login/Label';
import AuthContainer from '../Layout/login/AuthContainer';
import logo from '../../assets/img/logo.png';

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errorFeedback, setErrorFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setUser, url } = getContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const errorEmail = useRef();
  const errorPassword = useRef();

  useEffect(() => {
    if (state) {
      setLoginData({ ...state });
    }
  }, [state]);

  function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    const promise = axios.post(`${url}/sign-in`, loginData);

    promise.then((res) => {
      setLoading(true);
      storeLogin(res.data);
      navigate('/store');
    });
    promise.catch((error) => {
      console.log(error.response);
      treatingError(error);
    });
    setLoading(true);
  }
  function treatingError(error) {
    let firstError = '';
    if (typeof error.response.data === 'string') {
      firstError = error.response.data.split(' ')[0];
      setErrorFeedback([error.response.data]);
    } else {
      firstError = error.response.data[0].split(' ')[0];
      setErrorFeedback(error.response.data);
    }
    focusInputError(firstError);
  }
  function focusInputError(firstError) {
    if (firstError.includes('email')) {
      errorEmail.current.focus();
    } else {
      errorPassword.current.focus();
    }
  }

  function storeLogin(res) {
    const {
      token, name, email, img
    } = res;
    const userInfo = {
      name,
      email,
      img,
      config: {
        headers: {
          Authorization: `Bearer ${token}`,
          Email: email,
        },
      },
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setUser(persistUser);
  }

  return (
    <ContainerExtended>
      <AuthContainer>
        <Logo>
          <img src={logo} alt="logo do site" />
          <h1>MyConnect</h1>
        </Logo>
        <Form onSubmit={handleLogin}>
          <InputExtended
            error={errorFeedback.filter((error) => error.includes('email'))}
            ref={errorEmail}
            type="email"
            placeholder="email"
            value={loginData.email}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                email: e.target.value,
              });
              setErrorFeedback([]);
            }}
          />
          <FeedbackLabel
            error={errorFeedback.filter((error) => error.includes('email'))}
            text={loginData.email ? 'Email não cadastrado' : 'Campo necessário'}
          />
          <InputExtended
            error={errorFeedback.filter((error) => error.includes('password'))}
            ref={errorPassword}
            type="password"
            placeholder="senha"
            value={loginData.password}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                password: e.target.value,
              });
              setErrorFeedback([]);
            }}
          />
          <FeedbackLabel
            error={errorFeedback.filter((error) => error.includes('password'))}
            text={loginData.email ? 'Senha inválida' : 'Campo necessário'}
          />
          <RetangularButton type="submit" title="Entrar" loading={loading} />
        </Form>
        <Link className="link" to="register">
          Não tem uma conta? Cadastre-se!
        </Link>
      </AuthContainer>
    </ContainerExtended>
  );
}
export default Login;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;
  & > img {
    height: 120px;
    max-width: 500px;
  }
  &>h1{
    margin-bottom: 2rem;
    font-size: var(--font-size-logo);
    font-weight: var(--font-weight-bold);
    color: var(--color-4);
  }
`;

const Form = styled.form`
  margin-bottom: 2rem;
`;

const ContainerExtended = styled(Container)`
  a {
    text-align: center;
    font-weight: 700;
    color: var(--color-text-dark-blue);
  }
`;

const InputExtended = styled(Input)`
  margin-bottom: 0;
  border: ${(props) => (props.error.length === 0
    ? '2px solid var(--color-border)'
    : '2px solid red')};
`;
