import InputSpinner from 'react-input-number-spinner';
import { useState } from 'react';
import styled from 'styled-components';
import { getContext } from '../../../hooks/UserContext';
import Header from '../Header';
import Price from './Price';
import Footer from '../Footer';

function InfoProduct() {
  const {title, img, describe, price} = getContext().productClicked;
  const [value, setValue] = useState(2);
  
  return (
    <ContainerInfoProduct>
      <Header title={title} />
      <figure>
        <img src={img} alt="" />
      </figure>
      <section>
        <p>{describe}</p>
        <div className="value">
          <InputSpinner
            step={1}
            min={1}
            max={10}
            value={value}
            onChange={ num => setValue(num) }
          />
          <Price price={price} size='2.5rem' />
        </div>
        <Footer price={price * value} callback={() => console.log('oiii')} />
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
    justify-content: start;

    position: absolute;
    top: calc(100vh * 0.27);;
    bottom: 0;
    right: 0;
    left: 0;

    padding: 1rem;

    border-radius: 15px;
    box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--color-1);
  }

  &>section p {
    font-weight: var(--font-weight-bold);
  }

  &>section div.value {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &>section div.value>div:first-child{
    margin-bottom: 10px;
    max-width: 8rem;
  }
`