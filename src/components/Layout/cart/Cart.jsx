import { getContext } from "../../../hooks/UserContext";
import { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";
import Product from "./Product";
import InputNumber from "../InputNumber";

function Cart() {
  const { user, url, windowsState } = getContext();

  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("");
  const [productValue, setProductValue] = useState([]);

  useEffect(() => {
    getProducts();
  }, [windowsState]);

  useEffect(() => {
    getTotal();
  }, [productValue]);

  //buscando os produtos na api
  function getProducts() {
    const promisse = axios.get(`${url}/cart`, user.config);
    promisse.then((res) => {
      setProducts(res.data);
      getValues(res.data);
    });
    promisse.catch((e) => console.error(e));
  }
  //pagando o valor de cada produto
  function getValues(res) {
    let values = [];
    res.forEach((value) => {
      values.push(value.price * value.qtd);
    });
    setProductValue(values);
  }
  //pegando o valor total das compras
  function getTotal() {
    let currentValue = 0;
    productValue.forEach((value) => {
      currentValue += value;
    });
    setTotal(currentValue);
  }
  //deletando produto da api
  function deleteProduct() {
    const promisse = axios.delete(`${url}/cart`, {
      data: { selected },
      headers: user.config.headers,
    });
    promisse.then((res) => {
      console.log(res.data);
      setSelected("");
      getProducts();
    });
    promisse.catch((e) => console.error(e));
  }
  //selecionando produto com click
  function selectingProduct(id) {
    if (id === selected) {
      setSelected("");
    } else {
      setSelected(id);
    }
  }
  //efetuando as compras
  function submitPurchases() {
    let totalPurchase = 0;
    let qtdPurchase = 0;
    let titlesPurchase = [];
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
      `Sua compra ficou: R$${totalPurchase}!!! Deseja continuar ?`
    );
    if (confirm) {
      const promisse = axios.post(`${url}/historic`, purchase, user.config);
      promisse.then((res) => {
        console.log(res.data);
        setSelected("");
        deleteProduct();
      });
      promisse.catch((e) => console.error(e));
    }
  }

  //monta os produtos na tela
  function assembleProducts(){
    return (
      <section>
      {products.map((product, index) => {
        const { img, price, title, _id } = product;
        let { qtd } = product; // FIX: resover problema de passagem por referencia
        return (
          <InputNumber key={index} showNumber={true} maxValue={10} value={qtd} 
            width="100%"
            height="7.5rem"
            setValue={(v) => {
              const newValue = productValue;
              newValue.splice(index, 1, v * price);
              setProductValue([...newValue]);
            }}
          >
            <Product img={img} title={title} selectingProduct={selectingProduct} 
              value={price}
              id={_id}
            />
          </InputNumber>
        );
      })}
      </section>
    )
  }

  const message = (
    <section>
      <h1 className="no-cart">
        Você não tem nenhum produto no carrinho.
        <br />
        Vá até a loja e faça já o seu pedido !!!
      </h1>
    </section>
  );

  return (
    <CartContainer  >
      <Header title={"meu carrionho"} callback={deleteProduct} ion_icon="trash-outline" />
      {products.length === 0 
        ? message 
        : assembleProducts()
      }
      {products.length === 0 
        ? (<></>) 
        : (<Footer price={total.toFixed(2)} title={"comprar"} callback={submitPurchases} />)
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
  height: 100%;
  
  border-radius: 15px;
  background-color: white;

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

    border-radius: 15px;
    box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-1);

    &>div {
      outline: ${(props) =>
        props.border ? "3px solid var(--color-border)" : "none"
      };
      margin-bottom: 1rem;
      box-shadow: var(--shadow);
    }

    .no-cart {
      color: var(--color-3);
      font-weight: var(--font-weight-bold);
      font-size: var();
      font-size: var(--font-size-price);
      text-align: center;
    }
  }
`;