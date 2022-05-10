import {Link, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserContext from '../../hooks/UserContext';

import Input from "../Layout/Input";
import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";

function Login() {
  const [registerData, setRegisterData] = useState({name:'', email: '', password: ''});
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();
  const {url} = useContext(UserContext).context;

  function register(event) {
    event.preventDefault();

    if(registerData.password !== passwordConfirm){
      alert('Senhas diferentes')
      return
    }

    const promise = axios.post(`${url}/sign-up`, registerData)

    promise.then(() => {
        const {email, password} = registerData;
        navigate('/', {state: {email, password}});
      })

    promise.catch(error => {
        console.log(error)
        alert(error.response.data);
      })
  }

  return (
    <ContainerExtended>
        <Logo>MyWallet</Logo>
        <Form onSubmit={register}>
          <Input type="text" placeholder='Name'
            onChange={e => {setRegisterData({...registerData, name: e.target.value})}} 
          />
          <Input type="email" placeholder='E-mail'
            onChange={e => {setRegisterData({...registerData, email: e.target.value})}}  
          />
          <Input type='password' placeholder="Senha" 
            onChange={e => {setRegisterData({...registerData, password: e.target.value})}} 
          />
          <Input type='password' placeholder="Confirme a senha" 
            onChange={e => {setPasswordConfirm(e.target.value)}} 
          />
          <RetangularButton type='submit' title={'Registrar'} />
        </Form>
        <Link className="link" to={'/'}>
          Já tem uma conta? Entre agora!
        </Link>
    </ContainerExtended>
  );
}

export default Login;

const Logo = styled.h1`

  margin-bottom: 1.5rem;

  font-family: var(--font-logo);
  font-size: var(--font-size-logo);

  color: var(--color-text-white);
`

const Form = styled.form`
  margin-bottom: 2rem;
`

const ContainerExtended = styled(Container)`
  a {
    font-weight: 700;
    color: var(--color-text-white)
  }
`
