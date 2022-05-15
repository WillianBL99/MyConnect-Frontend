import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { getContext } from "../../hooks/UserContext";

import Input from "../Layout/Input";
import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import FeedbackLabel from "../Layout/Label";
import AuthContainer from "../Layout/AuthContainer";
import background from "./../../styled/assets/layout_mobile.png";

function Login() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    img: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorFeedback, setErrorFeedback] = useState("!");
  const navigate = useNavigate();
  const { url } = getContext();

  function register(event) {
    event.preventDefault();

    if (registerData.password !== passwordConfirm) {
      setErrorFeedback("different passwords");
      return;
    }

    const promise = axios.post(`${url}/sign-up`, registerData);

    promise.then(() => {
      const { email, password } = registerData;
      navigate('/', {state: {email, password}});
    });

    promise.catch((error) => {
      console.log(error);
      setErrorFeedback(error.response.data);
    });
  }

  return (
    <ContainerExtended>
      <AuthContainer style={{ backgroundImage: `url(${background})` }}>
        <Logo>Nome</Logo>
        <Form onSubmit={register}>
          <FeedbackLabel errorFeedback={errorFeedback} />
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setRegisterData({ ...registerData, name: e.target.value });
            }}
          />
          <Input
            type="url"
            placeholder="URL da imagem"
            onChange={(e) => {
              setRegisterData({ ...registerData, img: e.target.value });
            }}
          />
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setRegisterData({ ...registerData, email: e.target.value });
            }}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setRegisterData({ ...registerData, password: e.target.value });
            }}
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
          <RetangularButton type="submit" title={"Registrar"} />
        </Form>
        <Link className="link" to={"/"}>
          Já tem uma conta? Entre agora!
        </Link>
      </AuthContainer>
    </ContainerExtended>
  );
}

export default Login;

const Logo = styled.h1`
  margin-bottom: 0.5rem;

  font-family: var(--font-logo);
  font-size: var(--font-size-logo);

  color: var(--color-text-dark-blue);
`;

const Form = styled.form`
  margin-bottom: 2rem;
`;

const ContainerExtended = styled(Container)`
  a {
    font-weight: 700;
    color: var(--color-text-dark-blue);
  }
`;
