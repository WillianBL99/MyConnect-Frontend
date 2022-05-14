import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";

import { getContext } from "../../hooks/UserContext";

function Cart() {
  const { user, url, windowsState } = getContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${url}/cart`, user.config);
    promise.then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
    promise.catch((e) => console.error(e));
  }, [windowsState]);
  return (
    <>
      <Header title={"meu carrionho"} />
      {products.length === 0 ? (
        <h1 className="no-habits">Você não tem nenhum produto no carrinho</h1>
      ) : (
        <>
          {products.map((product) => {
            const { img, price, qtd, tittle, _id } = product;
            return (
              <Product
                key={_id}
                img={img}
                price={price}
                qtd={qtd}
                tittle={tittle}
              />
            );
          })}
        </>
      )}
    </>
  );
}
function Product(props) {
  const {img}=props;
  return (
  <Container>
    <img src={img} alt="" />
  </Container>);
}

const Container = styled.article`
  display: flex;
  width: 100%;
  height: 3rem;
`;
export default Cart;
