import { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { getContext } from '../../../hooks/UserContext';

import Header from '../Header';
import Footer from '../Footer';
import Product from './Product';
import InputNumber from '../inputs-buttons/InputNumber';
import MessageInformation from '../MessageInformation';
import LoadingScreen from '../LoadingScreen';

function Cart() {
  const { user, url, windowsState } = getContext();

  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('');
  const [productValue, setProductValue] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, [windowsState]);

  useEffect(() => {
    getTotal();
  }, [productValue]);

  // buscando os produtos na api
  function getProducts() {
    setLoading(true);
    const promisse = axios.get(`${url}/cart`, user.config);
    promisse.then((res) => {
      setLoading(false);
      setProducts(res.data);
      getValues(res.data);
    });
    promisse.catch((e) => {
      setLoading(false);
      console.error(e)
    });
  }
  // pagando o valor de cada produto
  function getValues(res) {
    const values = [];
    res.forEach((value) => {
      values.push(value.price * value.qtd);
    });
    setProductValue(values);
  }
  // pegando o valor total das compras
  function getTotal() {
    let currentValue = 0;
    productValue.forEach((value) => {
      currentValue += value;
    });
    setTotal(currentValue);
  }

  // deletando produto da api
  function deleteProduct(showMessage=true) {
    if(showMessage){
      const qtdProd = selected === ''?1:products.length
      const confirm = window.confirm(`
        ${qtdProd} produto(s) selecinado(s)
        Deseja retirar do carrinho?`
      );
      if(!confirm) return;
    }

    setLoading(true);
    const promisse = axios.delete(`${url}/cart`, {
      data: { selected },
      headers: user.config.headers,
    });
    promisse.then((res) => {
      setLoading(false);
      console.log(res.data);
      setSelected('');
      getProducts();
    });

    promisse.catch((e) => {
      setLoading(false);
      console.error(e.response.data)
    });
  }
  // selecionando produto com click
  function selectingProduct(id) {
    if (id === selected) {
      setSelected('');
    } else {
      setSelected(id);
    }
  }
  // efetuando as compras
  function submitPurchases() {
    let totalPurchase = 0;
    let qtdPurchase = 0;
    const titlesPurchase = [];
    products.forEach((product, index) => {
      qtdPurchase += productValue[index] / product.price;
      titlesPurchase.push(product.title);
      totalPurchase += productValue[index];
    });
    const purchase = {
      email: user.config.headers.Email,
      qtd: qtdPurchase,
      total: totalPurchase,
      products: titlesPurchase,
    };
    const confirm = window.confirm(
      `Deseja efetuar a compra?\nValor: R$${totalPurchase}`
    );
    if (confirm) {
      setLoading(true);
      const promisse = axios.post(`${url}/historic`, purchase, user.config);
      promisse.then((res) => {
        setLoading(false);
        setSelected('');
        deleteProduct(false);
      });
      promisse.catch((e) => {
        setLoading(false);
        console.error(e.response.data)
      });
    }
  }

  // monta os produtos na tela
  function assembleProducts() {
    return (
      <section>
        {products.map((product, index) => {
          const {
            img, price, title, _id
          } = product;
          const { qtd } = product; // FIX: resover problema de passagem por referencia
          return (
            <ProductDiv key={_id} border={selected === _id}>
              <InputNumber
                showNumber
                maxValue={10}
                value={qtd}
                width="100%"
                height="7.5rem"
                setValue={(v) => {
                  const newValue = productValue;
                  newValue.splice(index, 1, v * price);
                  setProductValue([...newValue]);
                }}
              >
                <Product
                  img={img}
                  title={title}
                  selectingProduct={selectingProduct}
                  value={price}
                  id={_id}
                />
              </InputNumber>
            </ProductDiv>
          );
        })}
      </section>
    );
  }

  const message = (
    <MessageInformation
      title="Seu carrinho está vazio."
      subTitle="Vá até a loja e adicione produtos ao seu carrinho!"
    />
  );

  return (
    <CartContainer>
      <Header
        title="meu carrinho"
        callback={deleteProduct}
        ion_icon="trash-outline"
      />
      {products.length === 0 ? message : assembleProducts()}

      <LoadingScreen loading={loading} />
      {products.length === 0 ? (
        <></>
        ) : (
          <Footer
          price={total.toFixed(2)}
          title="comprar"
          callback={submitPurchases}
          />
          )
        }
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 100%;
  max-width: 100%;
  height: 100%;

  border-top-left-radius: var(--radius-min);
  border-bottom-left-radius: var(--radius-min);

  background-color: var(--color-3);

  & > section {
    margin-top: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 80%;
    padding: 1rem;
    padding-bottom: 5rem;

    overflow-y: auto;

    border-radius: var(--radius-min);
    box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-2);
  }
`;
const ProductDiv = styled.div`
  width: 100%;
  border-radius: var(--radius-min);
  outline: ${(props) => (props.border ? '3px solid var(--color-border)' : 'none')};
  margin-bottom: 1rem;
  box-shadow: var(--shadow);
`;
