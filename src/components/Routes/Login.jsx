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
import logoTest from "./../../styled/assets/logo_test.png";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorFeedback, setErrorFeedback] = useState([]);
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
      console.log(error.response);
      if(typeof error.response.data === "string"){
        setErrorFeedback([error.response.data]);
      }else{
        setErrorFeedback(error.response.data);
      }
    });
  }

  function storeLogin(res) {
    const { token, name, email, img } = res;
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
          <img src={logoTest} alt="logo do site" />
        </Logo>
        <Form onSubmit={handleLogin}>
          <InputExtended
            error={errorFeedback.filter((error) => error.includes("email"))}
            type="email"
            placeholder="E-mail"
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
            error={errorFeedback.filter((error) => error.includes("email"))}
            text={loginData.email ? "Email não cadastrado" : "Campo necessário"}
          />
          <InputExtended
            error={errorFeedback.filter((error) => error.includes("password"))}
            type="password"
            placeholder="Senha"
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
            error={errorFeedback.filter((error) => error.includes("password"))}
            text={loginData.email ? "Senha inválida" : "Campo necessário"}
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



const Logo = styled.div`
display: flex;
justify-content: center;
  width: 100%;
  overflow-x: hidden;
  &>img{
    height: 120px;
    max-width:500px;
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
  border: ${(props) =>
    props.error.length === 0
      ? "2px solid var(--color-border)"
      : "2px solid red"};
`;
