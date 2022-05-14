import styled from 'styled-components';
import { getContext } from '../../../hooks/UserContext';
import Header from '../Header';

function InfoProduct() {
  const {title, img, describe, price} = getContext().productClicked;
  const [integer, dec] = price.split('.');
  
  return (
    <ContainerInfoProduct>
      <Header title={title} />
      <figure>
        <img src={img} alt="" />
      </figure>
      <section>
        <p>{describe}</p>
        <div className="value">
          <small>R$</small>
          <strong>{integer}</strong>
          <small>,{dec}</small>
        </div>

      </section>
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

  &>figure {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: calc(100vh * 0.7);

    border-radius: 15px;
  }
  
  &>figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;
    
    border-radius: var(--radio-min);
  }

  &>section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: calc(100vh * 0.27);;
    bottom: 0;

    padding: 1rem;

    border-radius: 15px;
    background-color: blue;

  }

  &>section .value {
    display: flex;
    align-items: flex-start;
  }

  &>section .value strong {
    font-size: var(--font-size-price);
    font-weight: bold;

    color: var(--color-price);
  }

  &>section .value small {
    margin-top: 0.12rem;

    color: var(--color-price);
  }
`