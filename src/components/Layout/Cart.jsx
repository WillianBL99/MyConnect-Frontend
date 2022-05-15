import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import dayjs from "dayjs";

import { getContext } from "../../hooks/UserContext";
import InputNumber from "./InputNumber";
import Price from "./products/Price";
import Footer from "./Footer";

function Cart() {
  const { user, url, windowsState } = getContext();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("");
  const [productValue, setProductValue] = useState([]);
  const [total, setTotal] = useState(0);

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
  function submitPurchases(){
    let totalPurchase=0;
    let qtdPurchase=0;
    let titlesPurchase =[];
    products.forEach((product,index)=>{
      qtdPurchase+=(productValue[index]/product.price);
      titlesPurchase.push(product.title);
      totalPurchase+=productValue[index];
    });
    const purchase ={
      email:user.config.headers.Email,
      qtd:qtdPurchase,
      total:totalPurchase,
      products:titlesPurchase
    };
    const promisse = axios.post(`${url}/historic`,purchase,user.config);
    promisse.then(res=>{
      console.log(res.data);
    })
    promisse.catch((e) => console.error(e));
  }
  return (
    <CartContainer>
      <Header title={"meu carrionho"} />
      <h1
        onClick={() => {
          deleteProduct();
        }}
      >
        deletar
      </h1>
      {products.length === 0 ? (
        <h1 className="no-habits">Você não tem nenhum produto no carrinho</h1>
      ) : (
        <section>
          {products.map((product, index) => {
            const { img, price, title, _id } = product;
            let { qtd } = product;
            return (
              <InputNumber
                key={_id}
                showNumber={true}
                maxValue={10}
                value={qtd}
                setValue={(v) => {
                  const newValue = productValue;
                  newValue.splice(index, 1, v * price);
                  setProductValue([...newValue]);
                }}
                width="80%"
              >
                <Product
                  img={img}
                  title={title}
                  selectingProduct={selectingProduct}
                  selected={selected}
                  value={productValue[index].toFixed(2)}
                  id={_id}
                />
              </InputNumber>
            );
          })}
        </section>
      )}
      {products.length === 0 ? (
        <></>
      ) : (
        <Footer
          price={total.toFixed(2)}
          title={"comprar"}
          callback={() => {submitPurchases();}}
        />
      )}
    </CartContainer>
  );
}
function Product(props) {
  const { img, title, id, selectingProduct, selected, value } = props;
  return (
    <ProductContainer
      onClick={() => {
        selectingProduct(id);
      }}
      color={selected === id ? "red" : "green"}
    >
      <img src={img} alt="" />
      <div className="info">
        <p>{title}</p>
        <Price price={value} size="2.5rem" />
      </div>
    </ProductContainer>
  );
}
const CartContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  & > section {
    margin-top: auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;

    padding: 1rem;

    border-radius: 15px;
    box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-1);
  }
`;
const ProductContainer = styled.article`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 6px -5px rgba(0, 0, 0, 0.25);
  border-radius: 8px 0 0 8px;
  width: 100%;
  height: 90px;
  padding: 7px 16px 7px 7px;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    p {
      font-weight: 600;
      font-size: 15px;
      line-height: 17px;
      color: #0e0a18;
    }
  }
`;
export default Cart;
