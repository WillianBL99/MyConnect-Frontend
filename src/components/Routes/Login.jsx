import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import persistUser from "../../utils/persistUser";
import { getContext } from "../../hooks/UserContext";

import Input from "../Layout/Input";
import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import FeedbackLabel from "../Layout/Label";
import AuthContainer from "../Layout/AuthContainer";
import background from "./../../styled/assets/layout_mobile.png";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorFeedback, setErrorFeedback] = useState("!");
  const { setUser, url } = getContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const promise = axios.post(`${url}/sign-in`, loginData);

    promise.then((res) => {
      storeLogin(res.data);
      navigate("/store");
    });
    promise.catch((error) => {
      setErrorFeedback(error.response.data);
    });
  }

  function storeLogin(res) {
    const { token, name, email, image } = res;
    const userInfo = {
      name,
      email,
      image,
      config: {
        headers: {
          Authorization: `Bearer ${token}`,
          Email: email
        },
      },
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUser(persistUser);
  }

  useEffect(() => {
    if (state) {
      setLoginData({ ...state });
    }
  }, [state]);

  return (
    <ContainerExtended>
      <AuthContainer style={{ backgroundImage: `url(${background})` }}>
        <Logo>
          LogoLegal <br /> Nome{" "}
        </Logo>
        <Form onSubmit={handleLogin}>
          <FeedbackLabel errorFeedback={errorFeedback} />
          <Input
            type="email"
            placeholder="E-mail"
            value={loginData.email}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                email: e.target.value,
              });
            }}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={loginData.password}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                password: e.target.value,
              });
            }}
          />
          <RetangularButton type="submit" title={"Entrar"} />
        </Form>
        <Link className="link" to={"register"}>
          Não tem uma conta? Cadastre-se!
        </Link>
      </AuthContainer>
    </ContainerExtended>
  );
}

export default Login;

const Logo = styled.h1`

  text-align: center;
  font-family: var(--font-logo);
  font-size: var(--font-size-logo);

  color: var(--color-text-dark-blue);
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
