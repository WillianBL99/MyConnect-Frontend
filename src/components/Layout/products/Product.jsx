import React from 'react';
import styled from 'styled-components';
import { getContext } from '../../../hooks/UserContext';
import Price from './Price';
import setWindow from '../../../utils/setCurrentWindow';

function Product({ props }) {
  const { img, title, price } = props;
  const {
    setStates, windowsState, setWindowsState, setProductClicked
  } = getContext();

  function handleShowProduct() {
    setProductClicked(props);
    setWindow(setStates, windowsState, setWindowsState, 'info_product');
  }

  return (
    <ContainerProduct onClick={handleShowProduct}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <section>
        <p>{title}</p>
        <Price price={price} />
      </section>
    </ContainerProduct>
  );
}

export default Product;

const ContainerProduct = styled.article`

  display: flex;
  flex-direction: column;

  width: 8rem;
  height: 12rem;

  margin: 1rem;
  margin-bottom: 2.5rem;

  cursor: pointer;

  border-radius: var(--radius-min);
  box-shadow: var(--shadow);
  background-color: var(--color-3);

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  &>figure {
    width: 100%;
    min-height:  50%;

    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius-min);  
  }

  &>figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;

    border-radius: var(--radius-min);    
  }

  &>section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: 3px;

  }

  &>section p {
    color: var(--text-color-main);
    font-weight: var(--font-weight-regular);
  }
`;
