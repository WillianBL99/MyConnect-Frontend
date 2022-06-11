import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getContext } from '../../../hooks/UserContext';
import Header from '../Header';
import Price from './Price';
import Footer from '../Footer';
import InputNumber from '../inputs-buttons/InputNumber';
import LoadingScreen from '../LoadingScreen';

function InfoProduct() {
  const { user, url, setWindowsState } = getContext();
  const {
    title, img, describe, price
  } = getContext().productClicked;
  const [qtd, setQtd] = useState(1);
  const [loading, setLoading] = useState(false);
  const { email } = user;

  const backStore = () => setWindowsState({ windowOpen: false });

  function addToCart() {
    setLoading(true);
    const body = {
      img,
      qtd,
      email,
      title,
      describe,
      price
    };

    axios.post(`${url}/cart`, body, user.config)
      .then(() => {
        setLoading(false);
        backStore()
      })
      .catch((e) => {
        setLoading(false);
        alert(e.response.data)
      });
  }

  function confirmBuy() {
    setLoading(true);
    const msg = `Deseja efetuar a compra?\nValor: R$${qtd * price}`;
    if (!window.confirm(msg)) return;

    const body = {
      qtd,
      email,
      products: [title],
      total: qtd * price
    };

    axios.post(`${url}/historic`, body, user.config)
      .then(() => {
        setLoading(false);
        backStore()
      })
      .catch((e) => {
        setLoading(false);
        alert(e.response.data)
      });
  }

  function productActions() {
    return (
      <section>
        <p>{describe}</p>
        <div className="value">
          <InputNumber maxValue={10} setValue={setQtd} value={qtd} width="5rem">
            <strong className="qtd">{qtd}</strong>
          </InputNumber>
          <Price price={price} size="2.5rem" />
        </div>
        <Footer title="Comprar" price={(price * qtd).toFixed(2)} callback={confirmBuy} />
      </section>
    );
  }

  return (
    <ContainerInfoProduct>
      <Header title={title} ion_icon="cart-outline" callback={addToCart} />
      <figure>
        <img src={img} alt="" />
      </figure>
      <LoadingScreen loading={loading} />
      {productActions()}
    </ContainerInfoProduct>
  );
}

export default InfoProduct;

const ContainerInfoProduct = styled.section`
  --width: calc(100% - var(--padding-window));

  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;

  position: relative;
  box-shadow: inset 0px 148px 30px -85px rgba(0, 0, 0, 0.35);

  &>figure {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: calc(100vh * 0.7); 
  }
  
  &>figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;
    
    border-radius: var(--radius-min);

    box-shadow: inset 0px 148px 20px 20px rgba(0, 0, 0, 0.55);
  }

  &>section {
    display: flex;
    flex-direction: column;
    justify-content: start;

    position: absolute;
    top: calc(100vh * 0.27);
    bottom: 0;
    right: 0;
    left: 0;

    padding: 1rem;

    border-radius: var(--radius-min);
    box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-2);
  }

  &>section p {
    font-weight: var(--font-weight-bold);
  }

  &>section div.value {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;
  }

  &>section div.value strong.qtd {
    width: 100%;
    font-weight: bold;
    text-align: center;
  }

  & strong.qtd {
    color: var(--text-color-plain);
  }
`;
