import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { getContext } from "../../hooks/UserContext";

import Input from "../Layout/Input";
import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import FeedbackLabel from "../Layout/Label";
import AuthContainer from "../Layout/AuthContainer";

function Login() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    img: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorFeedback, setErrorFeedback] = useState([]);
  const navigate = useNavigate();
  const { url } = getContext();
  const errorEmail = useRef();
  const errorPassword = useRef();
  const errorName = useRef();
  const errorImg = useRef();
  const errorConfirm = useRef();

  function register(event) {
    event.preventDefault();

    if (registerData.password !== passwordConfirm) {
      setErrorFeedback(["Different passwords"]);
      return;
    }

    const promise = axios.post(`${url}/sign-up`, registerData);

    promise.then(() => {
      const { email, password } = registerData;
      navigate("/", { state: { email, password } });
    });

    promise.catch((error) => {
      console.log(error.response);
      treatingError(error);
    });
  }
  function treatingError(error) {
    let firstError = "";
    if (typeof error.response.data === "string") {
      firstError = error.response.data.split(" ")[0];
      setErrorFeedback([error.response.data]);
    } else {
      firstError = error.response.data[0].split(" ")[0];
      setErrorFeedback(error.response.data);
    }
    focusInputError(firstError);
  }
  function focusInputError(firstError) {
    if (firstError.includes("img")) {
      errorImg.current.focus();
    } else if(firstError.includes("name")) {
      errorName.current.focus();
    }else if(firstError.includes("email")) {
      errorEmail.current.focus();
    }else if(firstError.includes("password")) {
      errorPassword.current.focus();
    }else{
      errorConfirm.current.focus();
    }
  }

  return (
    <ContainerExtended>
      <AuthContainer >
        <Logo>
          <img src={"#"} alt="logo" />
        </Logo>
        <Form onSubmit={register}>
          <InputExtended
            error={errorFeedback.filter((error) => error.includes("img"))}
            ref={errorImg}
            type="url"
            placeholder="URL da imagem"
            onChange={(e) => {
              setRegisterData({ ...registerData, img: e.target.value });
              setErrorFeedback([]);
            }}
          />
          <FeedbackLabel
            error={errorFeedback.filter((error) => error.includes("img"))}
            text={registerData.img ? "Imagem inválida" : "Campo necessário"}
          />
          <InputExtended
            error={errorFeedback.filter((error) => error.includes("name"))}
            ref={errorName}
            type="text"
            placeholder="nome"
            onChange={(e) => {
              setRegisterData({ ...registerData, name: e.target.value });
              setErrorFeedback([]);
            }}
          />
          <FeedbackLabel
            error={errorFeedback.filter((error) => error.includes("name"))}
            text={registerData.name ? "Nome inválido" : "Campo necessário"}
          />
          <InputExtended
            error={errorFeedback.filter((error) => error.includes("email"))}
            ref={errorEmail}
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setRegisterData({ ...registerData, email: e.target.value });
              setErrorFeedback([]);
            }}
          />
          <FeedbackLabel
            error={errorFeedback.filter((error) => error.includes("email"))}
            text={
              registerData.email ? "email já cadastrado" : "Campo necessário"
            }
          />
          <InputExtended
            error={errorFeedback.filter((error) => error.includes("password"))}
            ref={errorPassword}
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setRegisterData({ ...registerData, password: e.target.value });
              setErrorFeedback([]);
            }}
          />
          <FeedbackLabel
            error={errorFeedback.filter((error) => error.includes("password"))}
            text={registerData.password ? "Senha inválida" : "Campo necessário"}
          />
          <InputExtended
            error={errorFeedback.filter((error) => error.includes("Different"))}
            ref={errorConfirm}
            type="password"
            placeholder="Confirme a senha"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
              setErrorFeedback([]);
            }}
          />
          <FeedbackLabel
            error={errorFeedback.filter((error) => error.includes("Different"))}
            text={"repita a senha corretamente"}
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
  & > img {
    height: 60px;
    width: 300px;
  }
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
const InputExtended = styled(Input)`
  margin-bottom: 0;
  border: ${(props) =>
    props.error.length === 0
      ? "2px solid var(--color-border)"
      : "2px solid red"};
`;
